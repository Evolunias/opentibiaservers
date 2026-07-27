import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-gunzodus-online');
}

export default function FreshStartGunzodusOnlineKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-gunzodus-online" />;
}
