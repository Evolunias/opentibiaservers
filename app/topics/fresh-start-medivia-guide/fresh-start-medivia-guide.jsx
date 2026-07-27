import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-medivia-guide');
}

export default function FreshStartMediviaGuideKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-medivia-guide" />;
}
