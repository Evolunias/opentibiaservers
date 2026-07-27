import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-oxygenot-create-account');
}

export default function BestOxygenotCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="best-oxygenot-create-account" />;
}
