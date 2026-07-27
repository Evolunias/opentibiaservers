import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-15-retro-server');
}

export default function Gunzodus15RetroServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-15-retro-server" />;
}
