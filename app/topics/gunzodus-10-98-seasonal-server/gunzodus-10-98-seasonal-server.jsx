import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-10-98-seasonal-server');
}

export default function Gunzodus1098SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-10-98-seasonal-server" />;
}
