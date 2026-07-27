import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-gunzodus-online');
}

export default function NewGunzodusOnlineKeywordPage() {
  return <StaticKeywordPage slug="new-gunzodus-online" />;
}
