import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-zezenia-online-create-account');
}

export default function OfficialZezeniaOnlineCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="official-zezenia-online-create-account" />;
}
