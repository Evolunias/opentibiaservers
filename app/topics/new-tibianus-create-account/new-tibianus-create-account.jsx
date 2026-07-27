import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-tibianus-create-account');
}

export default function NewTibianusCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="new-tibianus-create-account" />;
}
