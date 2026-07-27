import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-alastera-create-account');
}

export default function LowrateAlasteraCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="lowrate-alastera-create-account" />;
}
