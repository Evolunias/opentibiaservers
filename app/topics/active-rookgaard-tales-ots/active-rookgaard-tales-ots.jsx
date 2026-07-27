import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-rookgaard-tales-ots');
}

export default function ActiveRookgaardTalesOtsKeywordPage() {
  return <StaticKeywordPage slug="active-rookgaard-tales-ots" />;
}
