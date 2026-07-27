import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-rubinot-create-account');
}

export default function FreshStartRubinotCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-rubinot-create-account" />;
}
