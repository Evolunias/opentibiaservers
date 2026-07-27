import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-retro-server-mexico');
}

export default function GunzodusRetroServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-retro-server-mexico" />;
}
