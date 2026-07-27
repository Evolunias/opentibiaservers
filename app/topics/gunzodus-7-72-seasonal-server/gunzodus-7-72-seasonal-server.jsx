import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-7-72-seasonal-server');
}

export default function Gunzodus772SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-7-72-seasonal-server" />;
}
