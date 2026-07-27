import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-baiak-server-latin-america');
}

export default function GunzodusBaiakServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-baiak-server-latin-america" />;
}
