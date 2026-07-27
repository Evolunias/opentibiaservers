import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-saintsot-online');
}

export default function HighrateSaintsotOnlineKeywordPage() {
  return <StaticKeywordPage slug="highrate-saintsot-online" />;
}
