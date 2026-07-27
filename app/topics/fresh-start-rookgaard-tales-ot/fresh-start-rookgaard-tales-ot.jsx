import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-rookgaard-tales-ot');
}

export default function FreshStartRookgaardTalesOtKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-rookgaard-tales-ot" />;
}
