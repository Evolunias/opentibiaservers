import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-serenity-guide');
}

export default function BestSerenityGuideKeywordPage() {
  return <StaticKeywordPage slug="best-serenity-guide" />;
}
