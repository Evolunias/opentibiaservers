import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-tibiaorigins-create-account');
}

export default function NewSeasonTibiaoriginsCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="new-season-tibiaorigins-create-account" />;
}
