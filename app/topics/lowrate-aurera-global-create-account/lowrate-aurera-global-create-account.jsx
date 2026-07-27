import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-aurera-global-create-account');
}

export default function LowrateAureraGlobalCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="lowrate-aurera-global-create-account" />;
}
