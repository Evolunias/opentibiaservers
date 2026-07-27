import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-zunera-ot-wiki');
}

export default function RealMapZuneraOtWikiKeywordPage() {
  return <StaticKeywordPage slug="real-map-zunera-ot-wiki" />;
}
