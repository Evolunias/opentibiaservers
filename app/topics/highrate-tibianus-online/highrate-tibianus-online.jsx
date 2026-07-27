import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-tibianus-online');
}

export default function HighrateTibianusOnlineKeywordPage() {
  return <StaticKeywordPage slug="highrate-tibianus-online" />;
}
