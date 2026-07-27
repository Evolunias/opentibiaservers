import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-gunzodus-ots');
}

export default function NewSeasonGunzodusOtsKeywordPage() {
  return <StaticKeywordPage slug="new-season-gunzodus-ots" />;
}
