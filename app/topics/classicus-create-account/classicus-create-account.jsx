import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-create-account');
}

export default function ClassicusCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="classicus-create-account" />;
}
