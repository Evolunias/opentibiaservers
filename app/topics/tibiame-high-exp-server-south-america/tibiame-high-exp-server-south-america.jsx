import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-high-exp-server-south-america');
}

export default function TibiameHighExpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiame-high-exp-server-south-america" />;
}
