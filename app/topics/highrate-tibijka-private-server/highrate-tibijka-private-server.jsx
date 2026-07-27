import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-tibijka-private-server');
}

export default function HighrateTibijkaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="highrate-tibijka-private-server" />;
}
