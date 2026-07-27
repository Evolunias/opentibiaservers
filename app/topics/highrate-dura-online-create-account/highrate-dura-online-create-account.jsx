import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-dura-online-create-account');
}

export default function HighrateDuraOnlineCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="highrate-dura-online-create-account" />;
}
