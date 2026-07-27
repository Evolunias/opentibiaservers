import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-gunzodus-open-tibia');
}

export default function NewGunzodusOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-gunzodus-open-tibia" />;
}
