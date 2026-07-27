import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-gunzodus-open-tibia');
}

export default function BestGunzodusOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="best-gunzodus-open-tibia" />;
}
