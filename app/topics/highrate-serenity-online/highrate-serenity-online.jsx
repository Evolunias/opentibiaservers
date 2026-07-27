import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-serenity-online');
}

export default function HighrateSerenityOnlineKeywordPage() {
  return <StaticKeywordPage slug="highrate-serenity-online" />;
}
