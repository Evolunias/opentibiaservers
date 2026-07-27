import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-classicus-create-account');
}

export default function CurrentClassicusCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="current-classicus-create-account" />;
}
