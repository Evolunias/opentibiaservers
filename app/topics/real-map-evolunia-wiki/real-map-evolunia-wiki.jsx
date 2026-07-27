import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-evolunia-wiki');
}

export default function RealMapEvoluniaWikiKeywordPage() {
  return <StaticKeywordPage slug="real-map-evolunia-wiki" />;
}
