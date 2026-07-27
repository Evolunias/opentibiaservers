import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-neprenia-create-account');
}

export default function PopularNepreniaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="popular-neprenia-create-account" />;
}
