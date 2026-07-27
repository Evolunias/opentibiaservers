import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-gunzodus-tibia');
}

export default function HighrateGunzodusTibiaKeywordPage() {
  return <StaticKeywordPage slug="highrate-gunzodus-tibia" />;
}
