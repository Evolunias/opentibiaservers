import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-saintsot-wiki');
}

export default function RealMapSaintsotWikiKeywordPage() {
  return <StaticKeywordPage slug="real-map-saintsot-wiki" />;
}
