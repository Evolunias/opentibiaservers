import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-realesta-server');
}

export default function PvpEnforcedRealestaServerKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-realesta-server" />;
}
