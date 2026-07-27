import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-nto-star-rules');
}

export default function FreshStartNtoStarRulesKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-nto-star-rules" />;
}
