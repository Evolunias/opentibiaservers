import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-gunzodus-server');
}

export default function PvpeGunzodusServerKeywordPage() {
  return <StaticKeywordPage slug="pvpe-gunzodus-server" />;
}
