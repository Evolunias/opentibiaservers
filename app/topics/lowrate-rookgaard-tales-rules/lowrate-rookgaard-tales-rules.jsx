import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-rookgaard-tales-rules');
}

export default function LowrateRookgaardTalesRulesKeywordPage() {
  return <StaticKeywordPage slug="lowrate-rookgaard-tales-rules" />;
}
