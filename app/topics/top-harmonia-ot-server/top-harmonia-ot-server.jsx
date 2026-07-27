import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-harmonia-ot-server');
}

export default function TopHarmoniaOtServerKeywordPage() {
  return <StaticKeywordPage slug="top-harmonia-ot-server" />;
}
