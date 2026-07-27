import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-classicus-create-account');
}

export default function ActiveClassicusCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="active-classicus-create-account" />;
}
