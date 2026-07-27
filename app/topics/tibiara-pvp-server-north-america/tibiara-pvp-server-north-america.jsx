import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-pvp-server-north-america');
}

export default function TibiaraPvpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiara-pvp-server-north-america" />;
}
