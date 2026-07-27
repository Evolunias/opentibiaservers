import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-realera-server');
}

export default function PvpEnforcedRealeraServerKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-realera-server" />;
}
