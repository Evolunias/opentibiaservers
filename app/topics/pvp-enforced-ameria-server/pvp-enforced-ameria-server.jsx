import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-ameria-server');
}

export default function PvpEnforcedAmeriaServerKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-ameria-server" />;
}
