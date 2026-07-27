import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-sabrehaven-wiki');
}

export default function RealMapSabrehavenWikiKeywordPage() {
  return <StaticKeywordPage slug="real-map-sabrehaven-wiki" />;
}
