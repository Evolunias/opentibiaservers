import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-pvp-server-latin-america');
}

export default function TibijkaPvpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibijka-pvp-server-latin-america" />;
}
