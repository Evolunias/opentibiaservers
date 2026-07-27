import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-7-4-pvp-server');
}

export default function Gunzodus74PvpServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-7-4-pvp-server" />;
}
