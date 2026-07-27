import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-france-server');
}

export default function GunzodusFranceServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-france-server" />;
}
