import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-gunzodus-open-tibia');
}

export default function FreshStartGunzodusOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-gunzodus-open-tibia" />;
}
