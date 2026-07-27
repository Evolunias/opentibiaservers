import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-tibijka-guide');
}

export default function ActiveTibijkaGuideKeywordPage() {
  return <StaticKeywordPage slug="active-tibijka-guide" />;
}
