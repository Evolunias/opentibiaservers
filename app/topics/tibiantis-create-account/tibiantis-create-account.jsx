import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-create-account');
}

export default function TibiantisCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-create-account" />;
}
