import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-12-seasonal-server');
}

export default function Gunzodus12SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-12-seasonal-server" />;
}
