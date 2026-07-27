import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-tibianus-create-account');
}

export default function PopularTibianusCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="popular-tibianus-create-account" />;
}
