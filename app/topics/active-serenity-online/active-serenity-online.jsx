import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-serenity-online');
}

export default function ActiveSerenityOnlineKeywordPage() {
  return <StaticKeywordPage slug="active-serenity-online" />;
}
