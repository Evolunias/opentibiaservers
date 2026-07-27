import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-tibiara-server');
}

export default function PvpEnforcedTibiaraServerKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-tibiara-server" />;
}
