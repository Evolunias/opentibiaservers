import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-low-exp-server-latin-america');
}

export default function GunzodusLowExpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-low-exp-server-latin-america" />;
}
