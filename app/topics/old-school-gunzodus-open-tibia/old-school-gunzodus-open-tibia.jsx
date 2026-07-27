import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-gunzodus-open-tibia');
}

export default function OldSchoolGunzodusOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="old-school-gunzodus-open-tibia" />;
}
