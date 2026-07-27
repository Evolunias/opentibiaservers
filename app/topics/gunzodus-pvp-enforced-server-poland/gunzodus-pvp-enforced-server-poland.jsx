import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-pvp-enforced-server-poland');
}

export default function GunzodusPvpEnforcedServerPolandKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-pvp-enforced-server-poland" />;
}
