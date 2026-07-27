import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-coxaot-wiki');
}

export default function RealMapCoxaotWikiKeywordPage() {
  return <StaticKeywordPage slug="real-map-coxaot-wiki" />;
}
