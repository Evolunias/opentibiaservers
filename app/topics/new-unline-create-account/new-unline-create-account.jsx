import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-unline-create-account');
}

export default function NewUnlineCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="new-unline-create-account" />;
}
