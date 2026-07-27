import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-low-exp-server-north-america');
}

export default function GunzodusLowExpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-low-exp-server-north-america" />;
}
