import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-pvpe-server-latin-america');
}

export default function OxygenotPvpeServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-pvpe-server-latin-america" />;
}
