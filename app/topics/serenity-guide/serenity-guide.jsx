import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-guide');
}

export default function SerenityGuideKeywordPage() {
  return <StaticKeywordPage slug="serenity-guide" />;
}
