import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-gunzodus-ot');
}

export default function NoResetGunzodusOtKeywordPage() {
  return <StaticKeywordPage slug="no-reset-gunzodus-ot" />;
}
