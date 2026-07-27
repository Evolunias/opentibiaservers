import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-rookgaard-tales-official');
}

export default function CustomRookgaardTalesOfficialKeywordPage() {
  return <StaticKeywordPage slug="custom-rookgaard-tales-official" />;
}
