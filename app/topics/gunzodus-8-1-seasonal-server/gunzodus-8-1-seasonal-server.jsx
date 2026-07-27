import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-8-1-seasonal-server');
}

export default function Gunzodus81SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-8-1-seasonal-server" />;
}
