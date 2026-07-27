import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-8-0-pvp-server');
}

export default function Gunzodus80PvpServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-8-0-pvp-server" />;
}
