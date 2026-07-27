import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-guide');
}

export default function MediviaGuideKeywordPage() {
  return <StaticKeywordPage slug="medivia-guide" />;
}
