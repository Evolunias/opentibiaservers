import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-pvp-enforced-server-north-america');
}

export default function TibiaraPvpEnforcedServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiara-pvp-enforced-server-north-america" />;
}
