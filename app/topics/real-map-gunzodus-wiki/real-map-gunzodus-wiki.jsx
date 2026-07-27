import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-gunzodus-wiki');
}

export default function RealMapGunzodusWikiKeywordPage() {
  return <StaticKeywordPage slug="real-map-gunzodus-wiki" />;
}
