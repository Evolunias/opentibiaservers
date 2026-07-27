import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-eldera-online');
}

export default function OfficialElderaOnlineKeywordPage() {
  return <StaticKeywordPage slug="official-eldera-online" />;
}
