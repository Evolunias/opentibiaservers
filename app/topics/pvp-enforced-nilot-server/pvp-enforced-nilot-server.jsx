import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-nilot-server');
}

export default function PvpEnforcedNilotServerKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-nilot-server" />;
}
