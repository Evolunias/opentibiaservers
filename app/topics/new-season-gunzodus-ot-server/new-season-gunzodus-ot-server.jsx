import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-gunzodus-ot-server');
}

export default function NewSeasonGunzodusOtServerKeywordPage() {
  return <StaticKeywordPage slug="new-season-gunzodus-ot-server" />;
}
