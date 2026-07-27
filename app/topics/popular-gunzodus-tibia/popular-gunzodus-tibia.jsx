import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-gunzodus-tibia');
}

export default function PopularGunzodusTibiaKeywordPage() {
  return <StaticKeywordPage slug="popular-gunzodus-tibia" />;
}
