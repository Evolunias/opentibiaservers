import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-ameria-login');
}

export default function HighrateAmeriaLoginKeywordPage() {
  return <StaticKeywordPage slug="highrate-ameria-login" />;
}
