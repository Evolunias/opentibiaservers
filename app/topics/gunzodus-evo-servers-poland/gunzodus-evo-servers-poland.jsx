import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-evo-servers-poland');
}

export default function GunzodusEvoServersPolandKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-evo-servers-poland" />;
}
