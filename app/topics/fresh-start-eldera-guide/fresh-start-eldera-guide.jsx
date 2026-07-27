import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-eldera-guide');
}

export default function FreshStartElderaGuideKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-eldera-guide" />;
}
