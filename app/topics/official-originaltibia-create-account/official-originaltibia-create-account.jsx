import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-originaltibia-create-account');
}

export default function OfficialOriginaltibiaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="official-originaltibia-create-account" />;
}
