import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-pvpe');
}

export default function MarolaotPvpeKeywordPage() {
  return <StaticKeywordPage slug="marolaot-pvpe" />;
}
