import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-server-latin-america');
}

export default function NonPvpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-server-latin-america" />;
}
