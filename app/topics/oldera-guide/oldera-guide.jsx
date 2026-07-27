import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-guide');
}

export default function OlderaGuideKeywordPage() {
  return <StaticKeywordPage slug="oldera-guide" />;
}
