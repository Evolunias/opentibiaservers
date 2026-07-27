import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-pvpe-server-europe');
}

export default function MarolaotPvpeServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="marolaot-pvpe-server-europe" />;
}
