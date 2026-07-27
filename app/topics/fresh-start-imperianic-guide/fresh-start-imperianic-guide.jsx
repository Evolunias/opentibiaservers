import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-imperianic-guide');
}

export default function FreshStartImperianicGuideKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-imperianic-guide" />;
}
