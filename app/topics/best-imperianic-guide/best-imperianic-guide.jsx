import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-imperianic-guide');
}

export default function BestImperianicGuideKeywordPage() {
  return <StaticKeywordPage slug="best-imperianic-guide" />;
}
