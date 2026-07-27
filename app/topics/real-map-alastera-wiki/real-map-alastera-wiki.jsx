import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-alastera-wiki');
}

export default function RealMapAlasteraWikiKeywordPage() {
  return <StaticKeywordPage slug="real-map-alastera-wiki" />;
}
