import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-evolera-create-account');
}

export default function NewEvoleraCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="new-evolera-create-account" />;
}
