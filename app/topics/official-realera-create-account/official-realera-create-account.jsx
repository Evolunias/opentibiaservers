import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-realera-create-account');
}

export default function OfficialRealeraCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="official-realera-create-account" />;
}
