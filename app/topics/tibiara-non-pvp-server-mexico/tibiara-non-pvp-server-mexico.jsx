import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-non-pvp-server-mexico');
}

export default function TibiaraNonPvpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="tibiara-non-pvp-server-mexico" />;
}
