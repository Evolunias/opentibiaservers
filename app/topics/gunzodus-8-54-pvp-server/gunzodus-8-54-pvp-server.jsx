import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-8-54-pvp-server');
}

export default function Gunzodus854PvpServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-8-54-pvp-server" />;
}
