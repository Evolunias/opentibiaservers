import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-guide');
}

export default function ImperianicGuideKeywordPage() {
  return <StaticKeywordPage slug="imperianic-guide" />;
}
