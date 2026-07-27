import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-nostalther-guide');
}

export default function HighrateNostaltherGuideKeywordPage() {
  return <StaticKeywordPage slug="highrate-nostalther-guide" />;
}
