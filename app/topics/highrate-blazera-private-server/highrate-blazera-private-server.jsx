import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-blazera-private-server');
}

export default function HighrateBlazeraPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="highrate-blazera-private-server" />;
}
