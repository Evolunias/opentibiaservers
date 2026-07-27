import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-rookgaard-tales-ot');
}

export default function OfficialRookgaardTalesOtKeywordPage() {
  return <StaticKeywordPage slug="official-rookgaard-tales-ot" />;
}
