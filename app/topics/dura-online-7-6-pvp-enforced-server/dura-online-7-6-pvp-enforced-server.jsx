import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-7-6-pvp-enforced-server');
}

export default function DuraOnline76PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="dura-online-7-6-pvp-enforced-server" />;
}
