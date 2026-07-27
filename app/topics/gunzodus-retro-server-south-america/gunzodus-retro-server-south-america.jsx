import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-retro-server-south-america');
}

export default function GunzodusRetroServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-retro-server-south-america" />;
}
