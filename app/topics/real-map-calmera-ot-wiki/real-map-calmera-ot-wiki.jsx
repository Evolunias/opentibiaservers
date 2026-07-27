import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-calmera-ot-wiki');
}

export default function RealMapCalmeraOtWikiKeywordPage() {
  return <StaticKeywordPage slug="real-map-calmera-ot-wiki" />;
}
