import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-rookgaard-tales');
}

export default function CustomRookgaardTalesKeywordPage() {
  return <StaticKeywordPage slug="custom-rookgaard-tales" />;
}
