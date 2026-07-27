import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-rookgaard-tales-client');
}

export default function PopularRookgaardTalesClientKeywordPage() {
  return <StaticKeywordPage slug="popular-rookgaard-tales-client" />;
}
