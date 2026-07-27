import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-8-4-seasonal-server');
}

export default function Gunzodus84SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-8-4-seasonal-server" />;
}
