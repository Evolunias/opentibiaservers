import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-open-tibia');
}

export default function GunzodusOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-open-tibia" />;
}
