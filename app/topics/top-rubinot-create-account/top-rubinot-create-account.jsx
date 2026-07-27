import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-rubinot-create-account');
}

export default function TopRubinotCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="top-rubinot-create-account" />;
}
