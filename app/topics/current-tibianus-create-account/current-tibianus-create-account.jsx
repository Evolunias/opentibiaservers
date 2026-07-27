import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-tibianus-create-account');
}

export default function CurrentTibianusCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="current-tibianus-create-account" />;
}
