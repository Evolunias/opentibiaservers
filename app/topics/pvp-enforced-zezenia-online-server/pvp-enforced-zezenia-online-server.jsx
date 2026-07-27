import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-zezenia-online-server');
}

export default function PvpEnforcedZezeniaOnlineServerKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-zezenia-online-server" />;
}
