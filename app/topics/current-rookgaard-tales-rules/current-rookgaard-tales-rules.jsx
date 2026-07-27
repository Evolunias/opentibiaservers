import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-rookgaard-tales-rules');
}

export default function CurrentRookgaardTalesRulesKeywordPage() {
  return <StaticKeywordPage slug="current-rookgaard-tales-rules" />;
}
