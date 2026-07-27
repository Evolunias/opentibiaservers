import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-low-exp-server-mexico');
}

export default function GunzodusLowExpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-low-exp-server-mexico" />;
}
