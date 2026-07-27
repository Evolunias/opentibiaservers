import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-no-reset-server-brazil');
}

export default function GunzodusNoResetServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-no-reset-server-brazil" />;
}
