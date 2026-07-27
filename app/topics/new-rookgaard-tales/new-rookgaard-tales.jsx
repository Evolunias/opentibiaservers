import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-rookgaard-tales');
}

export default function NewRookgaardTalesKeywordPage() {
  return <StaticKeywordPage slug="new-rookgaard-tales" />;
}
