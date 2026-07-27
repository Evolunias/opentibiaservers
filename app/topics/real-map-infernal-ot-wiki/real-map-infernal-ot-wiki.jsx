import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-infernal-ot-wiki');
}

export default function RealMapInfernalOtWikiKeywordPage() {
  return <StaticKeywordPage slug="real-map-infernal-ot-wiki" />;
}
