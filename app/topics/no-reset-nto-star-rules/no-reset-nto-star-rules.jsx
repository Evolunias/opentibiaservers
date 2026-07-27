import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-nto-star-rules');
}

export default function NoResetNtoStarRulesKeywordPage() {
  return <StaticKeywordPage slug="no-reset-nto-star-rules" />;
}
