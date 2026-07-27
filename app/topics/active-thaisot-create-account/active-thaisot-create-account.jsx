import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-thaisot-create-account');
}

export default function ActiveThaisotCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="active-thaisot-create-account" />;
}
