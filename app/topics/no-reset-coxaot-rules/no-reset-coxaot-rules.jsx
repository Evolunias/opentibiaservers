import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-coxaot-rules');
}

export default function NoResetCoxaotRulesKeywordPage() {
  return <StaticKeywordPage slug="no-reset-coxaot-rules" />;
}
