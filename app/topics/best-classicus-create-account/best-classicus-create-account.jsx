import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-classicus-create-account');
}

export default function BestClassicusCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="best-classicus-create-account" />;
}
