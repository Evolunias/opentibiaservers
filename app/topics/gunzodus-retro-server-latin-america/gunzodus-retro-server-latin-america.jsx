import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-retro-server-latin-america');
}

export default function GunzodusRetroServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-retro-server-latin-america" />;
}
