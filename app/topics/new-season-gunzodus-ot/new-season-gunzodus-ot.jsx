import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-gunzodus-ot');
}

export default function NewSeasonGunzodusOtKeywordPage() {
  return <StaticKeywordPage slug="new-season-gunzodus-ot" />;
}
