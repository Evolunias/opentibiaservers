import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-nto-star-rules');
}

export default function TopNtoStarRulesKeywordPage() {
  return <StaticKeywordPage slug="top-nto-star-rules" />;
}
