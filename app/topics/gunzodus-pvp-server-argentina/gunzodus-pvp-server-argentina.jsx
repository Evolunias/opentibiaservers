import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-pvp-server-argentina');
}

export default function GunzodusPvpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-pvp-server-argentina" />;
}
