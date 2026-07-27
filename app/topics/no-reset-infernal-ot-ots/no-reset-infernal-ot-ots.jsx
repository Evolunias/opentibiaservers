import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-infernal-ot-ots');
}

export default function NoResetInfernalOtOtsKeywordPage() {
  return <StaticKeywordPage slug="no-reset-infernal-ot-ots" />;
}
