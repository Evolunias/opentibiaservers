import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-serenity-online');
}

export default function LowrateSerenityOnlineKeywordPage() {
  return <StaticKeywordPage slug="lowrate-serenity-online" />;
}
