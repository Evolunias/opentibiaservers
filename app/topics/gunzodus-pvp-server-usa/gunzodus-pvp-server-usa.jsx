import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-pvp-server-usa');
}

export default function GunzodusPvpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-pvp-server-usa" />;
}
