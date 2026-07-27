import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-cyntara-wiki');
}

export default function RealMapCyntaraWikiKeywordPage() {
  return <StaticKeywordPage slug="real-map-cyntara-wiki" />;
}
