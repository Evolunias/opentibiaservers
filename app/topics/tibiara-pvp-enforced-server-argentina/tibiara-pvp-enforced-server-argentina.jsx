import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-pvp-enforced-server-argentina');
}

export default function TibiaraPvpEnforcedServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="tibiara-pvp-enforced-server-argentina" />;
}
