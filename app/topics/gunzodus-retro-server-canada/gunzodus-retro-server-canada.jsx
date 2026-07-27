import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-retro-server-canada');
}

export default function GunzodusRetroServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-retro-server-canada" />;
}
