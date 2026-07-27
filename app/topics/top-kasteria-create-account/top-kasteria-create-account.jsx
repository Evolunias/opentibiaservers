import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-kasteria-create-account');
}

export default function TopKasteriaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="top-kasteria-create-account" />;
}
