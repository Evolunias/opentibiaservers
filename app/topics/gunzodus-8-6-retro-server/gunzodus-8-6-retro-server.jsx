import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-8-6-retro-server');
}

export default function Gunzodus86RetroServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-8-6-retro-server" />;
}
