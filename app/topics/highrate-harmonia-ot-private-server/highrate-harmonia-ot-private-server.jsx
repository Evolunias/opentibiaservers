import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-harmonia-ot-private-server');
}

export default function HighrateHarmoniaOtPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="highrate-harmonia-ot-private-server" />;
}
