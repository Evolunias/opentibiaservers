import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-rookgaard-tales-official');
}

export default function CurrentRookgaardTalesOfficialKeywordPage() {
  return <StaticKeywordPage slug="current-rookgaard-tales-official" />;
}
