import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-infernal-ot-open-tibia');
}

export default function OfficialInfernalOtOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="official-infernal-ot-open-tibia" />;
}
