import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-kasteria-create-account');
}

export default function CurrentKasteriaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="current-kasteria-create-account" />;
}
