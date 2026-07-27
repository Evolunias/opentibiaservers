import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-imperianic-guide');
}

export default function CurrentImperianicGuideKeywordPage() {
  return <StaticKeywordPage slug="current-imperianic-guide" />;
}
