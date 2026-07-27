import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-tibianus-create-account');
}

export default function LowrateTibianusCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="lowrate-tibianus-create-account" />;
}
