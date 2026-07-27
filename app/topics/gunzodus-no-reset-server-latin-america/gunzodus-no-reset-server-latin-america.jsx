import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-no-reset-server-latin-america');
}

export default function GunzodusNoResetServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-no-reset-server-latin-america" />;
}
