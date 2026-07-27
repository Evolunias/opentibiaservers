import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-rules');
}

export default function RookgaardTalesRulesKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-rules" />;
}
