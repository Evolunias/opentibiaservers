import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-evolera-create-account');
}

export default function CustomEvoleraCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="custom-evolera-create-account" />;
}
