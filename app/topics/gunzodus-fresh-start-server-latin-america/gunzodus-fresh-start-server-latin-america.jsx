import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-fresh-start-server-latin-america');
}

export default function GunzodusFreshStartServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-fresh-start-server-latin-america" />;
}
