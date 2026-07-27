import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-pvp-server-latin-america');
}

export default function GunzodusPvpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-pvp-server-latin-america" />;
}
