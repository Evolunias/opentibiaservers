import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-8-1-retro-server');
}

export default function Gunzodus81RetroServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-8-1-retro-server" />;
}
