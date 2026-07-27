import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-gunzodus-open-tibia');
}

export default function TopGunzodusOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="top-gunzodus-open-tibia" />;
}
