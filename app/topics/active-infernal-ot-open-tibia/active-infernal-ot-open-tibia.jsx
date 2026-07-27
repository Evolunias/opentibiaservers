import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-infernal-ot-open-tibia');
}

export default function ActiveInfernalOtOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="active-infernal-ot-open-tibia" />;
}
