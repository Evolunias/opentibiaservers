import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-canob-rules');
}

export default function NoResetCanobRulesKeywordPage() {
  return <StaticKeywordPage slug="no-reset-canob-rules" />;
}
