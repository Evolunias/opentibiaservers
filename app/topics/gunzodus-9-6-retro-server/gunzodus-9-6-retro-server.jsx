import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-9-6-retro-server');
}

export default function Gunzodus96RetroServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-9-6-retro-server" />;
}
