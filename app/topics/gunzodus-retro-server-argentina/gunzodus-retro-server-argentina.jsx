import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-retro-server-argentina');
}

export default function GunzodusRetroServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-retro-server-argentina" />;
}
