import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-retro-server-uk');
}

export default function GunzodusRetroServerUkKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-retro-server-uk" />;
}
