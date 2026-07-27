import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-serenity-guide');
}

export default function LowrateSerenityGuideKeywordPage() {
  return <StaticKeywordPage slug="lowrate-serenity-guide" />;
}
