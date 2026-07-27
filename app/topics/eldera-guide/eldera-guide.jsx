import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-guide');
}

export default function ElderaGuideKeywordPage() {
  return <StaticKeywordPage slug="eldera-guide" />;
}
