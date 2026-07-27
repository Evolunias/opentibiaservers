import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-dura-online-create-account');
}

export default function LowrateDuraOnlineCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="lowrate-dura-online-create-account" />;
}
