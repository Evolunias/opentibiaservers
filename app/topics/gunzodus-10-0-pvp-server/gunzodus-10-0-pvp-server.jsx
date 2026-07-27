import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-10-0-pvp-server');
}

export default function Gunzodus100PvpServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-10-0-pvp-server" />;
}
