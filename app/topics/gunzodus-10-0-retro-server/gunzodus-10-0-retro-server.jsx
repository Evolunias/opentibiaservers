import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-10-0-retro-server');
}

export default function Gunzodus100RetroServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-10-0-retro-server" />;
}
