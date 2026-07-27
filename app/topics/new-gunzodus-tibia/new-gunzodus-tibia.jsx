import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-gunzodus-tibia');
}

export default function NewGunzodusTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-gunzodus-tibia" />;
}
