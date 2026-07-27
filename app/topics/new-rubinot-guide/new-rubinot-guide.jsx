import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-rubinot-guide');
}

export default function NewRubinotGuideKeywordPage() {
  return <StaticKeywordPage slug="new-rubinot-guide" />;
}
