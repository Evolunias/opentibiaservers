import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-madnessalive-online');
}

export default function CustomMadnessaliveOnlineKeywordPage() {
  return <StaticKeywordPage slug="custom-madnessalive-online" />;
}
