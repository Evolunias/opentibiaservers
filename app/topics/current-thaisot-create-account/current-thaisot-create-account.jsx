import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-thaisot-create-account');
}

export default function CurrentThaisotCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="current-thaisot-create-account" />;
}
