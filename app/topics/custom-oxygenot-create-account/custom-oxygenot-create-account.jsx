import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-oxygenot-create-account');
}

export default function CustomOxygenotCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="custom-oxygenot-create-account" />;
}
