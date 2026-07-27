import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-servers-latin-america');
}

export default function PvpeServersLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="pvpe-servers-latin-america" />;
}
