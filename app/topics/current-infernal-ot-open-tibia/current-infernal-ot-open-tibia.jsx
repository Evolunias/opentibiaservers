import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-infernal-ot-open-tibia');
}

export default function CurrentInfernalOtOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="current-infernal-ot-open-tibia" />;
}
