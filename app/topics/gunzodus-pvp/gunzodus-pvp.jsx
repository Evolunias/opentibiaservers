import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-pvp');
}

export default function GunzodusPvpKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-pvp" />;
}
