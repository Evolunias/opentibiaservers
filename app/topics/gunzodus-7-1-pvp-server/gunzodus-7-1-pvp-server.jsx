import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-7-1-pvp-server');
}

export default function Gunzodus71PvpServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-7-1-pvp-server" />;
}
