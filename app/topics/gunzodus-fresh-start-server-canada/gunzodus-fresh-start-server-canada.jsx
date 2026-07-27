import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-fresh-start-server-canada');
}

export default function GunzodusFreshStartServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-fresh-start-server-canada" />;
}
