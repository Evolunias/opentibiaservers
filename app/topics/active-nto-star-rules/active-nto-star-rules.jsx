import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-nto-star-rules');
}

export default function ActiveNtoStarRulesKeywordPage() {
  return <StaticKeywordPage slug="active-nto-star-rules" />;
}
