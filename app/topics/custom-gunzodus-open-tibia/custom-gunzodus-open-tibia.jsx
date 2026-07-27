import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-gunzodus-open-tibia');
}

export default function CustomGunzodusOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="custom-gunzodus-open-tibia" />;
}
