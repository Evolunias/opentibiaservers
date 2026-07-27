import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-infernal-ot-open-tibia');
}

export default function NoResetInfernalOtOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-infernal-ot-open-tibia" />;
}
