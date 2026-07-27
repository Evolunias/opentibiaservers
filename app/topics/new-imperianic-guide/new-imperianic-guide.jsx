import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-imperianic-guide');
}

export default function NewImperianicGuideKeywordPage() {
  return <StaticKeywordPage slug="new-imperianic-guide" />;
}
