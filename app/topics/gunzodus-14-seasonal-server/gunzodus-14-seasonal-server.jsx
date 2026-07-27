import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-14-seasonal-server');
}

export default function Gunzodus14SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-14-seasonal-server" />;
}
