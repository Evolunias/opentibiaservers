import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-aurera-global-wiki');
}

export default function RealMapAureraGlobalWikiKeywordPage() {
  return <StaticKeywordPage slug="real-map-aurera-global-wiki" />;
}
