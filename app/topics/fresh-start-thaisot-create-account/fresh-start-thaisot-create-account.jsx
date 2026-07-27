import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-thaisot-create-account');
}

export default function FreshStartThaisotCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-thaisot-create-account" />;
}
