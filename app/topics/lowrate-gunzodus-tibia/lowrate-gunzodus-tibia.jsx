import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-gunzodus-tibia');
}

export default function LowrateGunzodusTibiaKeywordPage() {
  return <StaticKeywordPage slug="lowrate-gunzodus-tibia" />;
}
