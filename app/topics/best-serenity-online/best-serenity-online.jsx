import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-serenity-online');
}

export default function BestSerenityOnlineKeywordPage() {
  return <StaticKeywordPage slug="best-serenity-online" />;
}
