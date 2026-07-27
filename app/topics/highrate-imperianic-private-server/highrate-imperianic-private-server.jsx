import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-imperianic-private-server');
}

export default function HighrateImperianicPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="highrate-imperianic-private-server" />;
}
