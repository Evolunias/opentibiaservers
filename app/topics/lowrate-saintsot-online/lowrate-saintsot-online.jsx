import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-saintsot-online');
}

export default function LowrateSaintsotOnlineKeywordPage() {
  return <StaticKeywordPage slug="lowrate-saintsot-online" />;
}
