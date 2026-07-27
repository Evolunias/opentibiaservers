import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-harmonia-ot-server');
}

export default function BestHarmoniaOtServerKeywordPage() {
  return <StaticKeywordPage slug="best-harmonia-ot-server" />;
}
