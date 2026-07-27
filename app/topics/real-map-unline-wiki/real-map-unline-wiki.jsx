import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-unline-wiki');
}

export default function RealMapUnlineWikiKeywordPage() {
  return <StaticKeywordPage slug="real-map-unline-wiki" />;
}
