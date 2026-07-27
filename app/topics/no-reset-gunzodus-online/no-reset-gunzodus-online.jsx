import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-gunzodus-online');
}

export default function NoResetGunzodusOnlineKeywordPage() {
  return <StaticKeywordPage slug="no-reset-gunzodus-online" />;
}
