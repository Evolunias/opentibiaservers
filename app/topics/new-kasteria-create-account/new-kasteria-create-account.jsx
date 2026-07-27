import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-kasteria-create-account');
}

export default function NewKasteriaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="new-kasteria-create-account" />;
}
