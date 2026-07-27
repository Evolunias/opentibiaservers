import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-high-exp-server-poland');
}

export default function TibiameHighExpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="tibiame-high-exp-server-poland" />;
}
