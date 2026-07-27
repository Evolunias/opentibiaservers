import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-baiak-server-south-america');
}

export default function GunzodusBaiakServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-baiak-server-south-america" />;
}
