import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-serenity-guide');
}

export default function PopularSerenityGuideKeywordPage() {
  return <StaticKeywordPage slug="popular-serenity-guide" />;
}
