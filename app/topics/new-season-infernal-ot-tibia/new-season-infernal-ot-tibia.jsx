import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-infernal-ot-tibia');
}

export default function NewSeasonInfernalOtTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-season-infernal-ot-tibia" />;
}
