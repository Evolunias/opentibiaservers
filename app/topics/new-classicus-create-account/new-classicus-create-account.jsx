import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-classicus-create-account');
}

export default function NewClassicusCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="new-classicus-create-account" />;
}
