import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-tibiantis-online');
}

export default function OfficialTibiantisOnlineKeywordPage() {
  return <StaticKeywordPage slug="official-tibiantis-online" />;
}
