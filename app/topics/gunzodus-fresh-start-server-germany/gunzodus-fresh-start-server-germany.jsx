import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-fresh-start-server-germany');
}

export default function GunzodusFreshStartServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-fresh-start-server-germany" />;
}
