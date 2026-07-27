import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-non-pvp-server-uk');
}

export default function GunzodusNonPvpServerUkKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-non-pvp-server-uk" />;
}
