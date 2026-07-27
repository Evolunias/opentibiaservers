import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-retro-server-france');
}

export default function GunzodusRetroServerFranceKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-retro-server-france" />;
}
