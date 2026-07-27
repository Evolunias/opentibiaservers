import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-kasteria-create-account');
}

export default function ActiveKasteriaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="active-kasteria-create-account" />;
}
