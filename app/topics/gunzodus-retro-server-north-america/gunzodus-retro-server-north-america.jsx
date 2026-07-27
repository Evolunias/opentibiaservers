import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-retro-server-north-america');
}

export default function GunzodusRetroServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-retro-server-north-america" />;
}
