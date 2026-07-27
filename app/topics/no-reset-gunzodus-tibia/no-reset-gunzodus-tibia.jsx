import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-gunzodus-tibia');
}

export default function NoResetGunzodusTibiaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-gunzodus-tibia" />;
}
