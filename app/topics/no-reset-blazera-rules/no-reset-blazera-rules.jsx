import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-blazera-rules');
}

export default function NoResetBlazeraRulesKeywordPage() {
  return <StaticKeywordPage slug="no-reset-blazera-rules" />;
}
