import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-8-54-retro-server');
}

export default function Gunzodus854RetroServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-8-54-retro-server" />;
}
