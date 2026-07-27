import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-15-seasonal-server');
}

export default function Gunzodus15SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-15-seasonal-server" />;
}
