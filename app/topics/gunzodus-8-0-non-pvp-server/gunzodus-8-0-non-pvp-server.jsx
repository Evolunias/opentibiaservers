import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-8-0-non-pvp-server');
}

export default function Gunzodus80NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-8-0-non-pvp-server" />;
}
