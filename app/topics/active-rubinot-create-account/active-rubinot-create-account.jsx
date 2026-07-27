import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-rubinot-create-account');
}

export default function ActiveRubinotCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="active-rubinot-create-account" />;
}
