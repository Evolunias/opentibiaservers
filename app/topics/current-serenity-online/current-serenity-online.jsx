import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-serenity-online');
}

export default function CurrentSerenityOnlineKeywordPage() {
  return <StaticKeywordPage slug="current-serenity-online" />;
}
