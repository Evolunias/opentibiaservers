import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-rookgaard-tales-ots');
}

export default function NewRookgaardTalesOtsKeywordPage() {
  return <StaticKeywordPage slug="new-rookgaard-tales-ots" />;
}
