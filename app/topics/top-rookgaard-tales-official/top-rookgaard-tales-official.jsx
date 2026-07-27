import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-rookgaard-tales-official');
}

export default function TopRookgaardTalesOfficialKeywordPage() {
  return <StaticKeywordPage slug="top-rookgaard-tales-official" />;
}
