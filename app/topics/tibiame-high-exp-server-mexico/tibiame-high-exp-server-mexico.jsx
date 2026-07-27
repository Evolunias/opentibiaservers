import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-high-exp-server-mexico');
}

export default function TibiameHighExpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="tibiame-high-exp-server-mexico" />;
}
