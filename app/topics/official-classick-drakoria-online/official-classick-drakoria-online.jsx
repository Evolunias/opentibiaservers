import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-classick-drakoria-online');
}

export default function OfficialClassickDrakoriaOnlineKeywordPage() {
  return <StaticKeywordPage slug="official-classick-drakoria-online" />;
}
