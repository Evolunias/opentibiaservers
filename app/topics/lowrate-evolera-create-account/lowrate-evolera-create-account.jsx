import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-evolera-create-account');
}

export default function LowrateEvoleraCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="lowrate-evolera-create-account" />;
}
