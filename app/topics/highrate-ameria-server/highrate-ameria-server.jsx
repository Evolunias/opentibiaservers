import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-ameria-server');
}

export default function HighrateAmeriaServerKeywordPage() {
  return <StaticKeywordPage slug="highrate-ameria-server" />;
}
