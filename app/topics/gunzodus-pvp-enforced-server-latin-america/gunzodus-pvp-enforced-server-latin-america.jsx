import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-pvp-enforced-server-latin-america');
}

export default function GunzodusPvpEnforcedServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-pvp-enforced-server-latin-america" />;
}
