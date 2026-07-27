import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-rules');
}

export default function NtoStarRulesKeywordPage() {
  return <StaticKeywordPage slug="nto-star-rules" />;
}
