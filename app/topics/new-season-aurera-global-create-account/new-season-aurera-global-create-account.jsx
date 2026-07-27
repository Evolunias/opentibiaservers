import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-aurera-global-create-account');
}

export default function NewSeasonAureraGlobalCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="new-season-aurera-global-create-account" />;
}
