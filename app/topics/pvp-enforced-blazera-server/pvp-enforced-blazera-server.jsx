import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-blazera-server');
}

export default function PvpEnforcedBlazeraServerKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-blazera-server" />;
}
