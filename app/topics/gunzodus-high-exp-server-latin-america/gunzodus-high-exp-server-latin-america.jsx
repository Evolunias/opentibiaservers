import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-high-exp-server-latin-america');
}

export default function GunzodusHighExpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-high-exp-server-latin-america" />;
}
