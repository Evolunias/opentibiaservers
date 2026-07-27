import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-guide');
}

export default function RealeraGuideKeywordPage() {
  return <StaticKeywordPage slug="realera-guide" />;
}
