import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-yurots-wiki');
}

export default function RealMapYurotsWikiKeywordPage() {
  return <StaticKeywordPage slug="real-map-yurots-wiki" />;
}
