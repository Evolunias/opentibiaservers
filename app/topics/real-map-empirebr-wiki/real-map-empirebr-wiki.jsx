import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-empirebr-wiki');
}

export default function RealMapEmpirebrWikiKeywordPage() {
  return <StaticKeywordPage slug="real-map-empirebr-wiki" />;
}
