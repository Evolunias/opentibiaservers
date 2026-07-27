import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-8-54-non-pvp-server');
}

export default function Gunzodus854NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-8-54-non-pvp-server" />;
}
