import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-gunzodus-open-tibia');
}

export default function NoResetGunzodusOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-gunzodus-open-tibia" />;
}
