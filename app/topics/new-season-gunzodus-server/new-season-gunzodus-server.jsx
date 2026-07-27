import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-gunzodus-server');
}

export default function NewSeasonGunzodusServerKeywordPage() {
  return <StaticKeywordPage slug="new-season-gunzodus-server" />;
}
