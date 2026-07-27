import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-high-exp-server-europe');
}

export default function TibiameHighExpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="tibiame-high-exp-server-europe" />;
}
