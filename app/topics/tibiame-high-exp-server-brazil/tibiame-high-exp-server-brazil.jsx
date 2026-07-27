import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-high-exp-server-brazil');
}

export default function TibiameHighExpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="tibiame-high-exp-server-brazil" />;
}
