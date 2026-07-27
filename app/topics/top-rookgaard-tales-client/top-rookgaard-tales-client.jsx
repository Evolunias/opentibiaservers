import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-rookgaard-tales-client');
}

export default function TopRookgaardTalesClientKeywordPage() {
  return <StaticKeywordPage slug="top-rookgaard-tales-client" />;
}
