import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-realesta-create-account');
}

export default function ActiveRealestaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="active-realesta-create-account" />;
}
