import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-serenity-online');
}

export default function CustomSerenityOnlineKeywordPage() {
  return <StaticKeywordPage slug="custom-serenity-online" />;
}
