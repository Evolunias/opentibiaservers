import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-sabrehaven-online');
}

export default function OfficialSabrehavenOnlineKeywordPage() {
  return <StaticKeywordPage slug="official-sabrehaven-online" />;
}
