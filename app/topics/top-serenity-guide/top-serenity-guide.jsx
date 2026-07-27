import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-serenity-guide');
}

export default function TopSerenityGuideKeywordPage() {
  return <StaticKeywordPage slug="top-serenity-guide" />;
}
