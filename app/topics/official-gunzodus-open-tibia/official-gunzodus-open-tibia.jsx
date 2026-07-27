import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-gunzodus-open-tibia');
}

export default function OfficialGunzodusOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="official-gunzodus-open-tibia" />;
}
