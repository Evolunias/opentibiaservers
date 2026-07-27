import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-gunzodus');
}

export default function NoResetGunzodusKeywordPage() {
  return <StaticKeywordPage slug="no-reset-gunzodus" />;
}
