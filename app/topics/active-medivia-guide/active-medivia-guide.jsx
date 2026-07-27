import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-medivia-guide');
}

export default function ActiveMediviaGuideKeywordPage() {
  return <StaticKeywordPage slug="active-medivia-guide" />;
}
