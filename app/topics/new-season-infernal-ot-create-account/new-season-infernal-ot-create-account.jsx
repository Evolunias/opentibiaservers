import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-infernal-ot-create-account');
}

export default function NewSeasonInfernalOtCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="new-season-infernal-ot-create-account" />;
}
