import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-medivia-rules');
}

export default function NoResetMediviaRulesKeywordPage() {
  return <StaticKeywordPage slug="no-reset-medivia-rules" />;
}
