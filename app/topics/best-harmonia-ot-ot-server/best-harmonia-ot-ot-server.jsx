import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-harmonia-ot-ot-server');
}

export default function BestHarmoniaOtOtServerKeywordPage() {
  return <StaticKeywordPage slug="best-harmonia-ot-ot-server" />;
}
