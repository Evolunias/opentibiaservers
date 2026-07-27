import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-rookgaard-tales-official');
}

export default function FreshStartRookgaardTalesOfficialKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-rookgaard-tales-official" />;
}
