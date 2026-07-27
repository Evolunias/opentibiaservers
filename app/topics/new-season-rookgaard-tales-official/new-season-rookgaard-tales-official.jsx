import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-rookgaard-tales-official');
}

export default function NewSeasonRookgaardTalesOfficialKeywordPage() {
  return <StaticKeywordPage slug="new-season-rookgaard-tales-official" />;
}
