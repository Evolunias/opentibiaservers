import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-dura-online-online');
}

export default function OfficialDuraOnlineOnlineKeywordPage() {
  return <StaticKeywordPage slug="official-dura-online-online" />;
}
