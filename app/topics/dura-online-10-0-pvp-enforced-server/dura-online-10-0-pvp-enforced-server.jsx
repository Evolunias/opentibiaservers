import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-10-0-pvp-enforced-server');
}

export default function DuraOnline100PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="dura-online-10-0-pvp-enforced-server" />;
}
