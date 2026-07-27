import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-harmonia-ot-ot-server');
}

export default function FreshStartHarmoniaOtOtServerKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-harmonia-ot-ot-server" />;
}
