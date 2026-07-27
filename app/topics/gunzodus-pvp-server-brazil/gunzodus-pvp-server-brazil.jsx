import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-pvp-server-brazil');
}

export default function GunzodusPvpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-pvp-server-brazil" />;
}
