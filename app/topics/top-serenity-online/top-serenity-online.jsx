import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-serenity-online');
}

export default function TopSerenityOnlineKeywordPage() {
  return <StaticKeywordPage slug="top-serenity-online" />;
}
