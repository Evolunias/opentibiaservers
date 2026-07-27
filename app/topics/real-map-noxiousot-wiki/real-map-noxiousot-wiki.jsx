import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-noxiousot-wiki');
}

export default function RealMapNoxiousotWikiKeywordPage() {
  return <StaticKeywordPage slug="real-map-noxiousot-wiki" />;
}
