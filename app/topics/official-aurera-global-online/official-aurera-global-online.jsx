import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-aurera-global-online');
}

export default function OfficialAureraGlobalOnlineKeywordPage() {
  return <StaticKeywordPage slug="official-aurera-global-online" />;
}
