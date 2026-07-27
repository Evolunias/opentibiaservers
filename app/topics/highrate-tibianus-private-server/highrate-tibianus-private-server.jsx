import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-tibianus-private-server');
}

export default function HighrateTibianusPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="highrate-tibianus-private-server" />;
}
