import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-tibianus-create-account');
}

export default function ActiveTibianusCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="active-tibianus-create-account" />;
}
