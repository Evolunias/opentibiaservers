import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-gunzodus-open-tibia');
}

export default function LowrateGunzodusOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="lowrate-gunzodus-open-tibia" />;
}
