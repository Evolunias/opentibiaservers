import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-non-pvp-server-poland');
}

export default function GunzodusNonPvpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-non-pvp-server-poland" />;
}
