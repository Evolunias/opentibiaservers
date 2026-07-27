import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-classicus-create-account');
}

export default function TopClassicusCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="top-classicus-create-account" />;
}
