import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-unline-create-account');
}

export default function LowrateUnlineCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="lowrate-unline-create-account" />;
}
