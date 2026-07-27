import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-serenity-guide');
}

export default function FreshStartSerenityGuideKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-serenity-guide" />;
}
