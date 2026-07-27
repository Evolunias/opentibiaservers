import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-nto-star-rules');
}

export default function NewNtoStarRulesKeywordPage() {
  return <StaticKeywordPage slug="new-nto-star-rules" />;
}
