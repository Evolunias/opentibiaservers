import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-retro-server-poland');
}

export default function GunzodusRetroServerPolandKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-retro-server-poland" />;
}
