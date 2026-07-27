import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-fresh-start-server-poland');
}

export default function GunzodusFreshStartServerPolandKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-fresh-start-server-poland" />;
}
