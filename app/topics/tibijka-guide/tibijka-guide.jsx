import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-guide');
}

export default function TibijkaGuideKeywordPage() {
  return <StaticKeywordPage slug="tibijka-guide" />;
}
