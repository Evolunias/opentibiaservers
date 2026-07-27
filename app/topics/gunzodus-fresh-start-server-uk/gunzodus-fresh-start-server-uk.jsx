import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-fresh-start-server-uk');
}

export default function GunzodusFreshStartServerUkKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-fresh-start-server-uk" />;
}
