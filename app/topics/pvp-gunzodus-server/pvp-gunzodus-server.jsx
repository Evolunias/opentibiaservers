import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-gunzodus-server');
}

export default function PvpGunzodusServerKeywordPage() {
  return <StaticKeywordPage slug="pvp-gunzodus-server" />;
}
