import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-high-exp-server-canada');
}

export default function TibiameHighExpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="tibiame-high-exp-server-canada" />;
}
