import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-infernal-ot-tibia');
}

export default function ActiveInfernalOtTibiaKeywordPage() {
  return <StaticKeywordPage slug="active-infernal-ot-tibia" />;
}
