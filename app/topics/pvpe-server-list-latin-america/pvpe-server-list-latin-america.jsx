import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-server-list-latin-america');
}

export default function PvpeServerListLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="pvpe-server-list-latin-america" />;
}
