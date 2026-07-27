import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-kasteria-create-account');
}

export default function PopularKasteriaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="popular-kasteria-create-account" />;
}
