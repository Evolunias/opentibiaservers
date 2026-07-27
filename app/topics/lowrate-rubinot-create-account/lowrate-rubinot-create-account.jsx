import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-rubinot-create-account');
}

export default function LowrateRubinotCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="lowrate-rubinot-create-account" />;
}
