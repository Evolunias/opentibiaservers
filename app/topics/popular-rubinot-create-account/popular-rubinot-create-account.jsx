import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-rubinot-create-account');
}

export default function PopularRubinotCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="popular-rubinot-create-account" />;
}
