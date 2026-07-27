import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-low-exp-server-brazil');
}

export default function GunzodusLowExpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-low-exp-server-brazil" />;
}
