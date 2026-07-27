import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-tibijka-server');
}

export default function PvpEnforcedTibijkaServerKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-tibijka-server" />;
}
