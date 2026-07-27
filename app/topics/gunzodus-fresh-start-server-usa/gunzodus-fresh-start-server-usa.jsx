import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-fresh-start-server-usa');
}

export default function GunzodusFreshStartServerUsaKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-fresh-start-server-usa" />;
}
