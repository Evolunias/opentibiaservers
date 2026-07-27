import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-ameria-client');
}

export default function HighrateAmeriaClientKeywordPage() {
  return <StaticKeywordPage slug="highrate-ameria-client" />;
}
