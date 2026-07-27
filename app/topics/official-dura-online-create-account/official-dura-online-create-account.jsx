import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-dura-online-create-account');
}

export default function OfficialDuraOnlineCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="official-dura-online-create-account" />;
}
