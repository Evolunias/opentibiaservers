import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-vip');
}

export default function DuraOnlineVipKeywordPage() {
  return <StaticKeywordPage slug="dura-online-vip" />;
}
