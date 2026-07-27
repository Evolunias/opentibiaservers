import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-zunera-ot-rules');
}

export default function NoResetZuneraOtRulesKeywordPage() {
  return <StaticKeywordPage slug="no-reset-zunera-ot-rules" />;
}
