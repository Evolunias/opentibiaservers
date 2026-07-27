import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-14-non-pvp-server');
}

export default function Gunzodus14NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-14-non-pvp-server" />;
}
