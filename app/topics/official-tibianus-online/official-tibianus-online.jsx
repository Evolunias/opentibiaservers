import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-tibianus-online');
}

export default function OfficialTibianusOnlineKeywordPage() {
  return <StaticKeywordPage slug="official-tibianus-online" />;
}
