import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-pvp-server-europe');
}

export default function GunzodusPvpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-pvp-server-europe" />;
}
