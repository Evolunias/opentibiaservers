import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-rookgaard-tales');
}

export default function LowrateRookgaardTalesKeywordPage() {
  return <StaticKeywordPage slug="lowrate-rookgaard-tales" />;
}
