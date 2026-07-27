import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-medivia-guide');
}

export default function BestMediviaGuideKeywordPage() {
  return <StaticKeywordPage slug="best-medivia-guide" />;
}
