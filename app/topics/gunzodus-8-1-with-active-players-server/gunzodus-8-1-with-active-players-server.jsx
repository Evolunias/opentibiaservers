import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-8-1-with-active-players-server');
}

export default function Gunzodus81WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-8-1-with-active-players-server" />;
}
