import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-serenity-guide');
}

export default function ActiveSerenityGuideKeywordPage() {
  return <StaticKeywordPage slug="active-serenity-guide" />;
}
