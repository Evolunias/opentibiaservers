import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-pvp-server-latin-america');
}

export default function TibiaraPvpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiara-pvp-server-latin-america" />;
}
