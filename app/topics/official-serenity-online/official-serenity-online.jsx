import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-serenity-online');
}

export default function OfficialSerenityOnlineKeywordPage() {
  return <StaticKeywordPage slug="official-serenity-online" />;
}
