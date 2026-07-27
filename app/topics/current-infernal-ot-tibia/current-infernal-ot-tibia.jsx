import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-infernal-ot-tibia');
}

export default function CurrentInfernalOtTibiaKeywordPage() {
  return <StaticKeywordPage slug="current-infernal-ot-tibia" />;
}
