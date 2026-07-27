import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-rookgaard-tales-official');
}

export default function ActiveRookgaardTalesOfficialKeywordPage() {
  return <StaticKeywordPage slug="active-rookgaard-tales-official" />;
}
