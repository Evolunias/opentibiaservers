import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-gunzodus-private-server');
}

export default function NewSeasonGunzodusPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="new-season-gunzodus-private-server" />;
}
