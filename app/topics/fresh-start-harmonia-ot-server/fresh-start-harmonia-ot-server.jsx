import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-harmonia-ot-server');
}

export default function FreshStartHarmoniaOtServerKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-harmonia-ot-server" />;
}
