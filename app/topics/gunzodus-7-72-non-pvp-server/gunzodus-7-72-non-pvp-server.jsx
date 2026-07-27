import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-7-72-non-pvp-server');
}

export default function Gunzodus772NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-7-72-non-pvp-server" />;
}
