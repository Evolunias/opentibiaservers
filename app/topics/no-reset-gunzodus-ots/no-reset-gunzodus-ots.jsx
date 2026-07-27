import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-gunzodus-ots');
}

export default function NoResetGunzodusOtsKeywordPage() {
  return <StaticKeywordPage slug="no-reset-gunzodus-ots" />;
}
