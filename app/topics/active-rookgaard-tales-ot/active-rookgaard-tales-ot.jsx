import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-rookgaard-tales-ot');
}

export default function ActiveRookgaardTalesOtKeywordPage() {
  return <StaticKeywordPage slug="active-rookgaard-tales-ot" />;
}
