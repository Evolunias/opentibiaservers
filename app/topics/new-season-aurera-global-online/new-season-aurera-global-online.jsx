import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-aurera-global-online');
}

export default function NewSeasonAureraGlobalOnlineKeywordPage() {
  return <StaticKeywordPage slug="new-season-aurera-global-online" />;
}
