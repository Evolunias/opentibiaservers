import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-imperianic-create-account');
}

export default function CustomImperianicCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="custom-imperianic-create-account" />;
}
