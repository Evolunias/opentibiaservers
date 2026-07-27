import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-rookgaard-tales-client');
}

export default function LowrateRookgaardTalesClientKeywordPage() {
  return <StaticKeywordPage slug="lowrate-rookgaard-tales-client" />;
}
