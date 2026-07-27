import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-pvp-enforced-server-mexico');
}

export default function TibiaraPvpEnforcedServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="tibiara-pvp-enforced-server-mexico" />;
}
