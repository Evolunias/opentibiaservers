import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-serenity-online');
}

export default function FreshStartSerenityOnlineKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-serenity-online" />;
}
