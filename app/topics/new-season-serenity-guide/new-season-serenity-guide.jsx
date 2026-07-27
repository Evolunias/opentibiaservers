import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-serenity-guide');
}

export default function NewSeasonSerenityGuideKeywordPage() {
  return <StaticKeywordPage slug="new-season-serenity-guide" />;
}
