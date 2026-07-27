import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-non-pvp-server-latin-america');
}

export default function TibijkaNonPvpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibijka-non-pvp-server-latin-america" />;
}
