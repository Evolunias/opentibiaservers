import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-tibiascape-create-account');
}

export default function NewSeasonTibiascapeCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="new-season-tibiascape-create-account" />;
}
