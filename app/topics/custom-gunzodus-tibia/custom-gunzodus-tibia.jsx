import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-gunzodus-tibia');
}

export default function CustomGunzodusTibiaKeywordPage() {
  return <StaticKeywordPage slug="custom-gunzodus-tibia" />;
}
