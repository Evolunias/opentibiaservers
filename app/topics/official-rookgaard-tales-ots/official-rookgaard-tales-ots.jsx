import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-rookgaard-tales-ots');
}

export default function OfficialRookgaardTalesOtsKeywordPage() {
  return <StaticKeywordPage slug="official-rookgaard-tales-ots" />;
}
