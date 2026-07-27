import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-tibiascape-rules');
}

export default function NoResetTibiascapeRulesKeywordPage() {
  return <StaticKeywordPage slug="no-reset-tibiascape-rules" />;
}
