import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-rookgaard-tales-ot-server');
}

export default function NewSeasonRookgaardTalesOtServerKeywordPage() {
  return <StaticKeywordPage slug="new-season-rookgaard-tales-ot-server" />;
}
