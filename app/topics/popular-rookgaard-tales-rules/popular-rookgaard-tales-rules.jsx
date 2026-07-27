import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-rookgaard-tales-rules');
}

export default function PopularRookgaardTalesRulesKeywordPage() {
  return <StaticKeywordPage slug="popular-rookgaard-tales-rules" />;
}
