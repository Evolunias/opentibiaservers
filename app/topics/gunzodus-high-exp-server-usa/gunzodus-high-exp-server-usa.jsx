import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-high-exp-server-usa');
}

export default function GunzodusHighExpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-high-exp-server-usa" />;
}
