import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-rookgaard-tales-client');
}

export default function HighrateRookgaardTalesClientKeywordPage() {
  return <StaticKeywordPage slug="highrate-rookgaard-tales-client" />;
}
