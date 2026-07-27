import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-rookgaard-tales-rules');
}

export default function BestRookgaardTalesRulesKeywordPage() {
  return <StaticKeywordPage slug="best-rookgaard-tales-rules" />;
}
