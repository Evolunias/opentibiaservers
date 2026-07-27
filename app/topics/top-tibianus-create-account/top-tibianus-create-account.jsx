import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-tibianus-create-account');
}

export default function TopTibianusCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="top-tibianus-create-account" />;
}
