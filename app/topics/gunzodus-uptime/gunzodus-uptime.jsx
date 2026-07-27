import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-uptime');
}

export default function GunzodusUptimeKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-uptime" />;
}
