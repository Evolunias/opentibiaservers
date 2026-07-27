import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-retro-server-europe');
}

export default function GunzodusRetroServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-retro-server-europe" />;
}
