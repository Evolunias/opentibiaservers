import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-tibiaorigins-online');
}

export default function OfficialTibiaoriginsOnlineKeywordPage() {
  return <StaticKeywordPage slug="official-tibiaorigins-online" />;
}
