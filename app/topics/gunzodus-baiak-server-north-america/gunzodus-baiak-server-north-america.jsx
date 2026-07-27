import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-baiak-server-north-america');
}

export default function GunzodusBaiakServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-baiak-server-north-america" />;
}
