import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-classicus-create-account');
}

export default function CustomClassicusCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="custom-classicus-create-account" />;
}
