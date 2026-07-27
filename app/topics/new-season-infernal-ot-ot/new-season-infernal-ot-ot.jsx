import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-infernal-ot-ot');
}

export default function NewSeasonInfernalOtOtKeywordPage() {
  return <StaticKeywordPage slug="new-season-infernal-ot-ot" />;
}
