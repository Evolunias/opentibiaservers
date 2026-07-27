import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-harmonia-ot-wiki');
}

export default function RealMapHarmoniaOtWikiKeywordPage() {
  return <StaticKeywordPage slug="real-map-harmonia-ot-wiki" />;
}
