import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-midhem-wiki');
}

export default function RealMapMidhemWikiKeywordPage() {
  return <StaticKeywordPage slug="real-map-midhem-wiki" />;
}
