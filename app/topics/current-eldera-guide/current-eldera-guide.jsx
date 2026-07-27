import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-eldera-guide');
}

export default function CurrentElderaGuideKeywordPage() {
  return <StaticKeywordPage slug="current-eldera-guide" />;
}
