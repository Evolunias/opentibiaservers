import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-pvp-server-germany');
}

export default function GunzodusPvpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-pvp-server-germany" />;
}
