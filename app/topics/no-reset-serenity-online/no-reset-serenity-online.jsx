import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-serenity-online');
}

export default function NoResetSerenityOnlineKeywordPage() {
  return <StaticKeywordPage slug="no-reset-serenity-online" />;
}
