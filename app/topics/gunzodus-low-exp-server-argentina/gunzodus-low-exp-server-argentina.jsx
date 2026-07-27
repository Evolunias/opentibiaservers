import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-low-exp-server-argentina');
}

export default function GunzodusLowExpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-low-exp-server-argentina" />;
}
