import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-15-non-pvp-server');
}

export default function Gunzodus15NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-15-non-pvp-server" />;
}
