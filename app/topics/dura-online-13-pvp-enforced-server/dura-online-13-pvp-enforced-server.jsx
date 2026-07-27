import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-13-pvp-enforced-server');
}

export default function DuraOnline13PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="dura-online-13-pvp-enforced-server" />;
}
