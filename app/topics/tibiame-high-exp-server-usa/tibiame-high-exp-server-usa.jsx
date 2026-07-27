import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-high-exp-server-usa');
}

export default function TibiameHighExpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="tibiame-high-exp-server-usa" />;
}
