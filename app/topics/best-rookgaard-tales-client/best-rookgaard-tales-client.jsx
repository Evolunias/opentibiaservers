import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-rookgaard-tales-client');
}

export default function BestRookgaardTalesClientKeywordPage() {
  return <StaticKeywordPage slug="best-rookgaard-tales-client" />;
}
