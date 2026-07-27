import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-dura-online-server');
}

export default function PvpEnforcedDuraOnlineServerKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-dura-online-server" />;
}
