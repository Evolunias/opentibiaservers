import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-carlinot-create-account');
}

export default function LowrateCarlinotCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="lowrate-carlinot-create-account" />;
}
