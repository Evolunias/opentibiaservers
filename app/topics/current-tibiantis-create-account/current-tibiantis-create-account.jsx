import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-tibiantis-create-account');
}

export default function CurrentTibiantisCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="current-tibiantis-create-account" />;
}
