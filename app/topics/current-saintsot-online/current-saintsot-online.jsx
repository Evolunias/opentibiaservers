import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-saintsot-online');
}

export default function CurrentSaintsotOnlineKeywordPage() {
  return <StaticKeywordPage slug="current-saintsot-online" />;
}
