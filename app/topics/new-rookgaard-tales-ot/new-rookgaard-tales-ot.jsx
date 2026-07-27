import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-rookgaard-tales-ot');
}

export default function NewRookgaardTalesOtKeywordPage() {
  return <StaticKeywordPage slug="new-rookgaard-tales-ot" />;
}
