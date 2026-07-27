import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-pvp-server-uk');
}

export default function GunzodusPvpServerUkKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-pvp-server-uk" />;
}
