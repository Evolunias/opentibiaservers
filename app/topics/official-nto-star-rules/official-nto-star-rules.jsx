import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-nto-star-rules');
}

export default function OfficialNtoStarRulesKeywordPage() {
  return <StaticKeywordPage slug="official-nto-star-rules" />;
}
