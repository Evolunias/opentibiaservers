import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-pvp-server-canada');
}

export default function GunzodusPvpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-pvp-server-canada" />;
}
