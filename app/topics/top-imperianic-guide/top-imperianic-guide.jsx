import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-imperianic-guide');
}

export default function TopImperianicGuideKeywordPage() {
  return <StaticKeywordPage slug="top-imperianic-guide" />;
}
