import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-fresh-start-server-north-america');
}

export default function GunzodusFreshStartServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-fresh-start-server-north-america" />;
}
