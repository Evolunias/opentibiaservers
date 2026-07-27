import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-gunzodus-open-tibia');
}

export default function NewSeasonGunzodusOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-season-gunzodus-open-tibia" />;
}
