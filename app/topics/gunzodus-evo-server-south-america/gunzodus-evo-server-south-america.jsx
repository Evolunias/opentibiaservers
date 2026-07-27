import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-evo-server-south-america');
}

export default function GunzodusEvoServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-evo-server-south-america" />;
}
