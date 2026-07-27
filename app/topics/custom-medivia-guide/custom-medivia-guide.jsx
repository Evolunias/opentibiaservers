import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-medivia-guide');
}

export default function CustomMediviaGuideKeywordPage() {
  return <StaticKeywordPage slug="custom-medivia-guide" />;
}
