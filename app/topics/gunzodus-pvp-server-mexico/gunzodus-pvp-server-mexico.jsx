import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-pvp-server-mexico');
}

export default function GunzodusPvpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-pvp-server-mexico" />;
}
