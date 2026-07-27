import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-fresh-start-server-brazil');
}

export default function GunzodusFreshStartServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-fresh-start-server-brazil" />;
}
