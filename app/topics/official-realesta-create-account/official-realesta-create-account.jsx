import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-realesta-create-account');
}

export default function OfficialRealestaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="official-realesta-create-account" />;
}
