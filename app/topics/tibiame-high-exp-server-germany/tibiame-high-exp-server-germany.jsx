import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-high-exp-server-germany');
}

export default function TibiameHighExpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="tibiame-high-exp-server-germany" />;
}
