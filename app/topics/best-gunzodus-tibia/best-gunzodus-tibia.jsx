import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-gunzodus-tibia');
}

export default function BestGunzodusTibiaKeywordPage() {
  return <StaticKeywordPage slug="best-gunzodus-tibia" />;
}
