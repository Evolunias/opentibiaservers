import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-server-list-latin-america');
}

export default function NonPvpServerListLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-server-list-latin-america" />;
}
