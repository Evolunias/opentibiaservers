import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-gunzodus-online');
}

export default function NewSeasonGunzodusOnlineKeywordPage() {
  return <StaticKeywordPage slug="new-season-gunzodus-online" />;
}
