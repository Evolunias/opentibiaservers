import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-tibijka-server');
}

export default function HighrateTibijkaServerKeywordPage() {
  return <StaticKeywordPage slug="highrate-tibijka-server" />;
}
