import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-gunzodus-open-tibia');
}

export default function CurrentGunzodusOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="current-gunzodus-open-tibia" />;
}
