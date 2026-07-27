import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-sabrehaven-online');
}

export default function NewSeasonSabrehavenOnlineKeywordPage() {
  return <StaticKeywordPage slug="new-season-sabrehaven-online" />;
}
