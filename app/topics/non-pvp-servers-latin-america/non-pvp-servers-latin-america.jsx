import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-servers-latin-america');
}

export default function NonPvpServersLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-servers-latin-america" />;
}
