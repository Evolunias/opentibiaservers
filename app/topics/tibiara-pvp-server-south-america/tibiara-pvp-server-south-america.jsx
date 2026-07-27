import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-pvp-server-south-america');
}

export default function TibiaraPvpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiara-pvp-server-south-america" />;
}
