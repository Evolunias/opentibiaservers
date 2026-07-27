import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-medivia-guide');
}

export default function TopMediviaGuideKeywordPage() {
  return <StaticKeywordPage slug="top-medivia-guide" />;
}
