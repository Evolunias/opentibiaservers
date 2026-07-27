import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-infernal-ot-client');
}

export default function NoResetInfernalOtClientKeywordPage() {
  return <StaticKeywordPage slug="no-reset-infernal-ot-client" />;
}
