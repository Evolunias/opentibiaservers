import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-tibijka-guide');
}

export default function CustomTibijkaGuideKeywordPage() {
  return <StaticKeywordPage slug="custom-tibijka-guide" />;
}
