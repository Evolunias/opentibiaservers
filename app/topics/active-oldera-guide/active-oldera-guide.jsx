import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-oldera-guide');
}

export default function ActiveOlderaGuideKeywordPage() {
  return <StaticKeywordPage slug="active-oldera-guide" />;
}
