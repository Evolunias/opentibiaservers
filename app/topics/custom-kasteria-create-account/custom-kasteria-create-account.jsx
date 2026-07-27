import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-kasteria-create-account');
}

export default function CustomKasteriaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="custom-kasteria-create-account" />;
}
