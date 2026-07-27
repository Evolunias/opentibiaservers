import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-harmonia-ot-private-server');
}

export default function LowrateHarmoniaOtPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="lowrate-harmonia-ot-private-server" />;
}
