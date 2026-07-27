import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-calmera-ot-private-server');
}

export default function HighrateCalmeraOtPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="highrate-calmera-ot-private-server" />;
}
