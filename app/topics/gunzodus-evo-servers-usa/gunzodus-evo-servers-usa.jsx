import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-evo-servers-usa');
}

export default function GunzodusEvoServersUsaKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-evo-servers-usa" />;
}
