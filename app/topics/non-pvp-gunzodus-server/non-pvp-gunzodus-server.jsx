import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-gunzodus-server');
}

export default function NonPvpGunzodusServerKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-gunzodus-server" />;
}
