import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-serenity-online');
}

export default function NewSerenityOnlineKeywordPage() {
  return <StaticKeywordPage slug="new-serenity-online" />;
}
