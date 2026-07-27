import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-high-exp-server-north-america');
}

export default function TibiameHighExpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiame-high-exp-server-north-america" />;
}
