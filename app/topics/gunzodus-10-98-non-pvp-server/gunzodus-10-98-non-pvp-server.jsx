import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-10-98-non-pvp-server');
}

export default function Gunzodus1098NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-10-98-non-pvp-server" />;
}
