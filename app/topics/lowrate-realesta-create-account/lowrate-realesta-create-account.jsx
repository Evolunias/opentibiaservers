import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-realesta-create-account');
}

export default function LowrateRealestaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="lowrate-realesta-create-account" />;
}
