import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-evolera-create-account');
}

export default function ActiveEvoleraCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="active-evolera-create-account" />;
}
