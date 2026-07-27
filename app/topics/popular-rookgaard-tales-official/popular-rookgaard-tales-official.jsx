import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-rookgaard-tales-official');
}

export default function PopularRookgaardTalesOfficialKeywordPage() {
  return <StaticKeywordPage slug="popular-rookgaard-tales-official" />;
}
