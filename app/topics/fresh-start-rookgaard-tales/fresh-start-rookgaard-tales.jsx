import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-rookgaard-tales');
}

export default function FreshStartRookgaardTalesKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-rookgaard-tales" />;
}
