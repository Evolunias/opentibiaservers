import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-baiak-ilusion-online');
}

export default function HighrateBaiakIlusionOnlineKeywordPage() {
  return <StaticKeywordPage slug="highrate-baiak-ilusion-online" />;
}
