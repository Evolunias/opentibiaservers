import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-baiak-server-sweden');
}

export default function GunzodusBaiakServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-baiak-server-sweden" />;
}
