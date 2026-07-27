import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-gunzodus-client');
}

export default function NewSeasonGunzodusClientKeywordPage() {
  return <StaticKeywordPage slug="new-season-gunzodus-client" />;
}
