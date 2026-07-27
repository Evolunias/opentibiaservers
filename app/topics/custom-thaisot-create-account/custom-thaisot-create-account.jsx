import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-thaisot-create-account');
}

export default function CustomThaisotCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="custom-thaisot-create-account" />;
}
