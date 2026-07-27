import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-infernal-ot-ots');
}

export default function NewSeasonInfernalOtOtsKeywordPage() {
  return <StaticKeywordPage slug="new-season-infernal-ot-ots" />;
}
