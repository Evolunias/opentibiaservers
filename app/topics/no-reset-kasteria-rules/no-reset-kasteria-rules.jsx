import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-kasteria-rules');
}

export default function NoResetKasteriaRulesKeywordPage() {
  return <StaticKeywordPage slug="no-reset-kasteria-rules" />;
}
