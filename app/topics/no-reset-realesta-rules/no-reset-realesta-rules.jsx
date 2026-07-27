import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-realesta-rules');
}

export default function NoResetRealestaRulesKeywordPage() {
  return <StaticKeywordPage slug="no-reset-realesta-rules" />;
}
