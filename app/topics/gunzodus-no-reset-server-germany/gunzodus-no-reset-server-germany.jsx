import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-no-reset-server-germany');
}

export default function GunzodusNoResetServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-no-reset-server-germany" />;
}
