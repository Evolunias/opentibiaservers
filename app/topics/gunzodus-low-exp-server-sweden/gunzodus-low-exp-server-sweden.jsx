import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-low-exp-server-sweden');
}

export default function GunzodusLowExpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-low-exp-server-sweden" />;
}
