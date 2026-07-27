import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-ameria');
}

export default function HighrateAmeriaKeywordPage() {
  return <StaticKeywordPage slug="highrate-ameria" />;
}
