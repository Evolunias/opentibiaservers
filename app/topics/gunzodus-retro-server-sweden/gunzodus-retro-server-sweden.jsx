import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-retro-server-sweden');
}

export default function GunzodusRetroServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-retro-server-sweden" />;
}
