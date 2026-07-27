import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-kasteria-create-account');
}

export default function BestKasteriaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="best-kasteria-create-account" />;
}
