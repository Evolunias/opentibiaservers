import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-rookgaard-tales-ot');
}

export default function NewSeasonRookgaardTalesOtKeywordPage() {
  return <StaticKeywordPage slug="new-season-rookgaard-tales-ot" />;
}
