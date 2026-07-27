import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-tibiantis-create-account');
}

export default function CustomTibiantisCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="custom-tibiantis-create-account" />;
}
