import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-retro-server-germany');
}

export default function GunzodusRetroServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-retro-server-germany" />;
}
