import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-create-account');
}

export default function EvoleraCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="evolera-create-account" />;
}
