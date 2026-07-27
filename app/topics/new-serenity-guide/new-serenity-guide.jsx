import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-serenity-guide');
}

export default function NewSerenityGuideKeywordPage() {
  return <StaticKeywordPage slug="new-serenity-guide" />;
}
