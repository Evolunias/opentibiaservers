import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-fresh-start-server-argentina');
}

export default function GunzodusFreshStartServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-fresh-start-server-argentina" />;
}
