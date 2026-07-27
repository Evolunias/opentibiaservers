import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-tibiantis-create-account');
}

export default function LowrateTibiantisCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="lowrate-tibiantis-create-account" />;
}
