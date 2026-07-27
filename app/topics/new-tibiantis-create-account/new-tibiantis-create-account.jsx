import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-tibiantis-create-account');
}

export default function NewTibiantisCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="new-tibiantis-create-account" />;
}
