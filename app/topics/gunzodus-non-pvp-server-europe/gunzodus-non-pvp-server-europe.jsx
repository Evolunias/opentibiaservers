import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-non-pvp-server-europe');
}

export default function GunzodusNonPvpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-non-pvp-server-europe" />;
}
