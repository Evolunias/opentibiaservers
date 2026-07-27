import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-server-list-latin-america');
}

export default function PvpServerListLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="pvp-server-list-latin-america" />;
}
