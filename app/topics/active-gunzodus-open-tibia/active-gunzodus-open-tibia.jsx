import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-gunzodus-open-tibia');
}

export default function ActiveGunzodusOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="active-gunzodus-open-tibia" />;
}
