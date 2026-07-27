import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-rookgaard-tales-official');
}

export default function OfficialRookgaardTalesOfficialKeywordPage() {
  return <StaticKeywordPage slug="official-rookgaard-tales-official" />;
}
