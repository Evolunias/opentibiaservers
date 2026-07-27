import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-pvp-server-mexico');
}

export default function TibiaraPvpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="tibiara-pvp-server-mexico" />;
}
