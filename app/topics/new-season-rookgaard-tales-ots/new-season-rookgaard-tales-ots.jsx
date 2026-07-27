import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-rookgaard-tales-ots');
}

export default function NewSeasonRookgaardTalesOtsKeywordPage() {
  return <StaticKeywordPage slug="new-season-rookgaard-tales-ots" />;
}
