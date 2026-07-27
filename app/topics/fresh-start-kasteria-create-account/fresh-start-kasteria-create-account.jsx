import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-kasteria-create-account');
}

export default function FreshStartKasteriaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-kasteria-create-account" />;
}
