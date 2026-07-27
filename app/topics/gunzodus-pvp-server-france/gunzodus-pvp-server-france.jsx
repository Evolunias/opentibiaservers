import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-pvp-server-france');
}

export default function GunzodusPvpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-pvp-server-france" />;
}
