import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-rookgaard-tales-ot');
}

export default function CustomRookgaardTalesOtKeywordPage() {
  return <StaticKeywordPage slug="custom-rookgaard-tales-ot" />;
}
