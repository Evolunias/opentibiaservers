import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-retro-server-usa');
}

export default function GunzodusRetroServerUsaKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-retro-server-usa" />;
}
