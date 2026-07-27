import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-retro-server-brazil');
}

export default function GunzodusRetroServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-retro-server-brazil" />;
}
