import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-pvp-enforced-server-poland');
}

export default function TibiaraPvpEnforcedServerPolandKeywordPage() {
  return <StaticKeywordPage slug="tibiara-pvp-enforced-server-poland" />;
}
