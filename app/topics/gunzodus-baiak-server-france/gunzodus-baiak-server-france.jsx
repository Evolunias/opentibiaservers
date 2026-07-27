import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-baiak-server-france');
}

export default function GunzodusBaiakServerFranceKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-baiak-server-france" />;
}
