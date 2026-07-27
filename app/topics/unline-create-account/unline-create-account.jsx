import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-create-account');
}

export default function UnlineCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="unline-create-account" />;
}
