import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-8-4-retro-server');
}

export default function Gunzodus84RetroServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-8-4-retro-server" />;
}
