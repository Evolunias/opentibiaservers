import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-rookgaard-tales-official');
}

export default function BestRookgaardTalesOfficialKeywordPage() {
  return <StaticKeywordPage slug="best-rookgaard-tales-official" />;
}
