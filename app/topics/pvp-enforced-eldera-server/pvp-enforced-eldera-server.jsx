import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-eldera-server');
}

export default function PvpEnforcedElderaServerKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-eldera-server" />;
}
