import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-infernal-ot-tibia');
}

export default function OfficialInfernalOtTibiaKeywordPage() {
  return <StaticKeywordPage slug="official-infernal-ot-tibia" />;
}
