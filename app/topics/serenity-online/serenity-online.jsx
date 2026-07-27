import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-online');
}

export default function SerenityOnlineKeywordPage() {
  return <StaticKeywordPage slug="serenity-online" />;
}
