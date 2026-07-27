import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-medivia-guide');
}

export default function OfficialMediviaGuideKeywordPage() {
  return <StaticKeywordPage slug="official-medivia-guide" />;
}
