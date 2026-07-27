import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-infernal-ot');
}

export default function NewSeasonInfernalOtKeywordPage() {
  return <StaticKeywordPage slug="new-season-infernal-ot" />;
}
