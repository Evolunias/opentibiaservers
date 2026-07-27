import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-tibia');
}

export default function GunzodusTibiaKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-tibia" />;
}
