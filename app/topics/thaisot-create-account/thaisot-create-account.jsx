import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-create-account');
}

export default function ThaisotCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="thaisot-create-account" />;
}
