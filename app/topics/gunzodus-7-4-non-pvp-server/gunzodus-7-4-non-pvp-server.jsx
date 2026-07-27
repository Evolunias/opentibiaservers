import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-7-4-non-pvp-server');
}

export default function Gunzodus74NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-7-4-non-pvp-server" />;
}
