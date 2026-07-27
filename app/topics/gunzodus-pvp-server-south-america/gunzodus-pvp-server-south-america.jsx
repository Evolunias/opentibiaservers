import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-pvp-server-south-america');
}

export default function GunzodusPvpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-pvp-server-south-america" />;
}
