import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-14-retro-server');
}

export default function Gunzodus14RetroServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-14-retro-server" />;
}
