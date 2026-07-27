import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-13-non-pvp-server');
}

export default function Gunzodus13NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-13-non-pvp-server" />;
}
