import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-8-0-retro-server');
}

export default function Gunzodus80RetroServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-8-0-retro-server" />;
}
