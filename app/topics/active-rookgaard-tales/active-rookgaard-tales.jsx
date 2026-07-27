import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-rookgaard-tales');
}

export default function ActiveRookgaardTalesKeywordPage() {
  return <StaticKeywordPage slug="active-rookgaard-tales" />;
}
