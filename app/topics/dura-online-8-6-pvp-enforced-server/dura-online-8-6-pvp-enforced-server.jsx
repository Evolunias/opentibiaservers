import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-8-6-pvp-enforced-server');
}

export default function DuraOnline86PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="dura-online-8-6-pvp-enforced-server" />;
}
