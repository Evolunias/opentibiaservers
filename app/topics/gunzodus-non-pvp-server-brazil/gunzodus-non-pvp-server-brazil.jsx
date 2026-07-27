import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-non-pvp-server-brazil');
}

export default function GunzodusNonPvpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-non-pvp-server-brazil" />;
}
