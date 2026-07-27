import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-serenity-guide');
}

export default function CustomSerenityGuideKeywordPage() {
  return <StaticKeywordPage slug="custom-serenity-guide" />;
}
