import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-12-retro-server');
}

export default function Gunzodus12RetroServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-12-retro-server" />;
}
