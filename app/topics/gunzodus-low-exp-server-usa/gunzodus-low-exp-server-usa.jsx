import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-low-exp-server-usa');
}

export default function GunzodusLowExpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-low-exp-server-usa" />;
}
