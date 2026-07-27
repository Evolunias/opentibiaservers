import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-luminera-wiki');
}

export default function RealMapLumineraWikiKeywordPage() {
  return <StaticKeywordPage slug="real-map-luminera-wiki" />;
}
