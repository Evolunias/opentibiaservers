import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-infernal-ot-official');
}

export default function NewSeasonInfernalOtOfficialKeywordPage() {
  return <StaticKeywordPage slug="new-season-infernal-ot-official" />;
}
