import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-high-exp-server-sweden');
}

export default function GunzodusHighExpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-high-exp-server-sweden" />;
}
