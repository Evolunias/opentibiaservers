import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-non-pvp-server-north-america');
}

export default function TibiaraNonPvpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiara-non-pvp-server-north-america" />;
}
