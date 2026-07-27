import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-harmonia-ot-private-server');
}

export default function BestHarmoniaOtPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="best-harmonia-ot-private-server" />;
}
