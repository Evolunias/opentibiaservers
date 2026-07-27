import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-carlinot-private-server');
}

export default function HighrateCarlinotPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="highrate-carlinot-private-server" />;
}
