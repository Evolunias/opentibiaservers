import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-ameria-private-server');
}

export default function HighrateAmeriaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="highrate-ameria-private-server" />;
}
