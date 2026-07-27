import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-gunzodus-open-tibia');
}

export default function HighrateGunzodusOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="highrate-gunzodus-open-tibia" />;
}
