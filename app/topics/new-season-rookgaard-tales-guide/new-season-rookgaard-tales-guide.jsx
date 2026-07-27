import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-rookgaard-tales-guide');
}

export default function NewSeasonRookgaardTalesGuideKeywordPage() {
  return <StaticKeywordPage slug="new-season-rookgaard-tales-guide" />;
}
