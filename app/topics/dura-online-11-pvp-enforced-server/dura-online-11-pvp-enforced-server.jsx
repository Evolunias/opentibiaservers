import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-11-pvp-enforced-server');
}

export default function DuraOnline11PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="dura-online-11-pvp-enforced-server" />;
}
