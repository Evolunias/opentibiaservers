import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-thaisot-wiki');
}

export default function RealMapThaisotWikiKeywordPage() {
  return <StaticKeywordPage slug="real-map-thaisot-wiki" />;
}
