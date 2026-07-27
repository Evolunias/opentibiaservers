import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-pvp-server-poland');
}

export default function GunzodusPvpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-pvp-server-poland" />;
}
