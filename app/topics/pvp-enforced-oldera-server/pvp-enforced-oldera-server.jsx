import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-oldera-server');
}

export default function PvpEnforcedOlderaServerKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-oldera-server" />;
}
