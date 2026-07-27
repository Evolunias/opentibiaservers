import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-realesta-guide');
}

export default function CustomRealestaGuideKeywordPage() {
  return <StaticKeywordPage slug="custom-realesta-guide" />;
}
