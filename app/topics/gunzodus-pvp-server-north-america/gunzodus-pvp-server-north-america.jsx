import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-pvp-server-north-america');
}

export default function GunzodusPvpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-pvp-server-north-america" />;
}
