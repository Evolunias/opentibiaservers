import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-non-pvp-server-latin-america');
}

export default function TibiaraNonPvpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiara-non-pvp-server-latin-america" />;
}
