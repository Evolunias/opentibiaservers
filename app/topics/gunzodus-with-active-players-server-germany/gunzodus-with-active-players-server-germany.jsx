import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-with-active-players-server-germany');
}

export default function GunzodusWithActivePlayersServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-with-active-players-server-germany" />;
}
