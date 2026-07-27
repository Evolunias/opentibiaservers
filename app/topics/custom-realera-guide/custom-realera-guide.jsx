import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-realera-guide');
}

export default function CustomRealeraGuideKeywordPage() {
  return <StaticKeywordPage slug="custom-realera-guide" />;
}
