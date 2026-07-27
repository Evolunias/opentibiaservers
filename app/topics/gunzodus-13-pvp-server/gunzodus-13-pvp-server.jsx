import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-13-pvp-server');
}

export default function Gunzodus13PvpServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-13-pvp-server" />;
}
