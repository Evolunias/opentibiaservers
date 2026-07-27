import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-infernal-ot-open-tibia');
}

export default function NewSeasonInfernalOtOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-season-infernal-ot-open-tibia" />;
}
