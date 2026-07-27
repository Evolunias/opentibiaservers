import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-medivia-guide');
}

export default function NewMediviaGuideKeywordPage() {
  return <StaticKeywordPage slug="new-medivia-guide" />;
}
