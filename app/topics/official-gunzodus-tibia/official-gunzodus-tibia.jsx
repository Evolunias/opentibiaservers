import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-gunzodus-tibia');
}

export default function OfficialGunzodusTibiaKeywordPage() {
  return <StaticKeywordPage slug="official-gunzodus-tibia" />;
}
