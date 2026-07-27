import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-pvp-server-france');
}

export default function TibiaraPvpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="tibiara-pvp-server-france" />;
}
