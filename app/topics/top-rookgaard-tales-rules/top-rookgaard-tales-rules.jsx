import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-rookgaard-tales-rules');
}

export default function TopRookgaardTalesRulesKeywordPage() {
  return <StaticKeywordPage slug="top-rookgaard-tales-rules" />;
}
