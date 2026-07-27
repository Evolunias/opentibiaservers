import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-sabrehaven-create-account');
}

export default function TopSabrehavenCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="top-sabrehaven-create-account" />;
}
