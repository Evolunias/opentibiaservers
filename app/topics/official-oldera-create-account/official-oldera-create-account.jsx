import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-oldera-create-account');
}

export default function OfficialOlderaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="official-oldera-create-account" />;
}
