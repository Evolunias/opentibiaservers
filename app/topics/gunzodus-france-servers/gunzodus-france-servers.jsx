import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-france-servers');
}

export default function GunzodusFranceServersKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-france-servers" />;
}
