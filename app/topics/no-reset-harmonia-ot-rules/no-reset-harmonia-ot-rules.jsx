import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-harmonia-ot-rules');
}

export default function NoResetHarmoniaOtRulesKeywordPage() {
  return <StaticKeywordPage slug="no-reset-harmonia-ot-rules" />;
}
