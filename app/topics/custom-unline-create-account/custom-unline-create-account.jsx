import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-unline-create-account');
}

export default function CustomUnlineCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="custom-unline-create-account" />;
}
