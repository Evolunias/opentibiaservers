import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-rookgaard-tales');
}

export default function OfficialRookgaardTalesKeywordPage() {
  return <StaticKeywordPage slug="official-rookgaard-tales" />;
}
