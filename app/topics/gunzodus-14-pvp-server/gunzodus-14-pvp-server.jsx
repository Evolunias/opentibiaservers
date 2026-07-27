import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-14-pvp-server');
}

export default function Gunzodus14PvpServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-14-pvp-server" />;
}
