import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-eldera-guide');
}

export default function TopElderaGuideKeywordPage() {
  return <StaticKeywordPage slug="top-eldera-guide" />;
}
