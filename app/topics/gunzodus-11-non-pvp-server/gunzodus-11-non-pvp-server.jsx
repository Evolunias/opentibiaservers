import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-11-non-pvp-server');
}

export default function Gunzodus11NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-11-non-pvp-server" />;
}
