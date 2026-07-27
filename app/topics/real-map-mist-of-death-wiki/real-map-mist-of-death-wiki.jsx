import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-mist-of-death-wiki');
}

export default function RealMapMistOfDeathWikiKeywordPage() {
  return <StaticKeywordPage slug="real-map-mist-of-death-wiki" />;
}
