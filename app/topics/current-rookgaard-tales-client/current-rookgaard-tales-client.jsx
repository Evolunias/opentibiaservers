import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-rookgaard-tales-client');
}

export default function CurrentRookgaardTalesClientKeywordPage() {
  return <StaticKeywordPage slug="current-rookgaard-tales-client" />;
}
