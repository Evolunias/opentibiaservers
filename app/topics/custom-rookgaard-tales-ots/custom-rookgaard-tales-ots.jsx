import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-rookgaard-tales-ots');
}

export default function CustomRookgaardTalesOtsKeywordPage() {
  return <StaticKeywordPage slug="custom-rookgaard-tales-ots" />;
}
