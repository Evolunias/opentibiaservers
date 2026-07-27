import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-12-non-pvp-server');
}

export default function Gunzodus12NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-12-non-pvp-server" />;
}
