import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-rubinot-create-account');
}

export default function CustomRubinotCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="custom-rubinot-create-account" />;
}
