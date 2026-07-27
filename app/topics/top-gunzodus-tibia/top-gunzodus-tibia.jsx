import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-gunzodus-tibia');
}

export default function TopGunzodusTibiaKeywordPage() {
  return <StaticKeywordPage slug="top-gunzodus-tibia" />;
}
