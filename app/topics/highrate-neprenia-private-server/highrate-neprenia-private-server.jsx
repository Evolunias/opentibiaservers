import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-neprenia-private-server');
}

export default function HighrateNepreniaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="highrate-neprenia-private-server" />;
}
