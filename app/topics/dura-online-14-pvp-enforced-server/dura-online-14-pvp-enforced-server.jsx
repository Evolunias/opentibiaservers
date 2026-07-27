import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-14-pvp-enforced-server');
}

export default function DuraOnline14PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="dura-online-14-pvp-enforced-server" />;
}
