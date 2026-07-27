import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-with-active-players-server-poland');
}

export default function GunzodusWithActivePlayersServerPolandKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-with-active-players-server-poland" />;
}
