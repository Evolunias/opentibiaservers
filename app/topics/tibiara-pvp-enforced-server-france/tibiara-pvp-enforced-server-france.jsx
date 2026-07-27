import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-pvp-enforced-server-france');
}

export default function TibiaraPvpEnforcedServerFranceKeywordPage() {
  return <StaticKeywordPage slug="tibiara-pvp-enforced-server-france" />;
}
