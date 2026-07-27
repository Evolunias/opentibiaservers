import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-imperianic-create-account');
}

export default function ActiveImperianicCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="active-imperianic-create-account" />;
}
