import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-infernal-ot-tibia');
}

export default function NoResetInfernalOtTibiaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-infernal-ot-tibia" />;
}
