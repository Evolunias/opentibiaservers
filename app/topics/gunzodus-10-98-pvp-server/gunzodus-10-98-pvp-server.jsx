import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-10-98-pvp-server');
}

export default function Gunzodus1098PvpServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-10-98-pvp-server" />;
}
