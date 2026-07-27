import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-gunzodus-tibia');
}

export default function ActiveGunzodusTibiaKeywordPage() {
  return <StaticKeywordPage slug="active-gunzodus-tibia" />;
}
