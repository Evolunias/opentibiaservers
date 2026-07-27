import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-luminera-create-account');
}

export default function NewSeasonLumineraCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="new-season-luminera-create-account" />;
}
