import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-low-exp-server-canada');
}

export default function TibiameLowExpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="tibiame-low-exp-server-canada" />;
}
