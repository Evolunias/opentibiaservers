import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-alastera-online');
}

export default function OfficialAlasteraOnlineKeywordPage() {
  return <StaticKeywordPage slug="official-alastera-online" />;
}
