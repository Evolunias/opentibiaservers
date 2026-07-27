import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-servers-latin-america');
}

export default function PvpServersLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="pvp-servers-latin-america" />;
}
