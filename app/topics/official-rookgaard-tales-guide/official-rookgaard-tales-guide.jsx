import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-rookgaard-tales-guide');
}

export default function OfficialRookgaardTalesGuideKeywordPage() {
  return <StaticKeywordPage slug="official-rookgaard-tales-guide" />;
}
