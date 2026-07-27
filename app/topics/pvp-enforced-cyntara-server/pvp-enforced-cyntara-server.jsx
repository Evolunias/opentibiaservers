import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-cyntara-server');
}

export default function PvpEnforcedCyntaraServerKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-cyntara-server" />;
}
