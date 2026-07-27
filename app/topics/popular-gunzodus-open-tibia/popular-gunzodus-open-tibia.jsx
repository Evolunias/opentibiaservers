import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-gunzodus-open-tibia');
}

export default function PopularGunzodusOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="popular-gunzodus-open-tibia" />;
}
