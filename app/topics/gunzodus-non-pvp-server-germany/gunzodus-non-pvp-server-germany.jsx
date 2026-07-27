import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-non-pvp-server-germany');
}

export default function GunzodusNonPvpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-non-pvp-server-germany" />;
}
