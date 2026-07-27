import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-high-exp-server-argentina');
}

export default function TibiameHighExpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="tibiame-high-exp-server-argentina" />;
}
