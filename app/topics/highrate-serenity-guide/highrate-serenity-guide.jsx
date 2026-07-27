import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-serenity-guide');
}

export default function HighrateSerenityGuideKeywordPage() {
  return <StaticKeywordPage slug="highrate-serenity-guide" />;
}
