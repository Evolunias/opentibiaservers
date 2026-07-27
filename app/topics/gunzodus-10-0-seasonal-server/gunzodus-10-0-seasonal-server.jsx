import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-10-0-seasonal-server');
}

export default function Gunzodus100SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-10-0-seasonal-server" />;
}
