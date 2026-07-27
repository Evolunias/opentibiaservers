import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-rubinot-guide');
}

export default function ActiveRubinotGuideKeywordPage() {
  return <StaticKeywordPage slug="active-rubinot-guide" />;
}
