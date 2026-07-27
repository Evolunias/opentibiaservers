import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-madnessalive-online');
}

export default function ActiveMadnessaliveOnlineKeywordPage() {
  return <StaticKeywordPage slug="active-madnessalive-online" />;
}
