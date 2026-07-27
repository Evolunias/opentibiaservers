import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-mist-of-death-rules');
}

export default function NoResetMistOfDeathRulesKeywordPage() {
  return <StaticKeywordPage slug="no-reset-mist-of-death-rules" />;
}
