import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-midhem-rules');
}

export default function NoResetMidhemRulesKeywordPage() {
  return <StaticKeywordPage slug="no-reset-midhem-rules" />;
}
