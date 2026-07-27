import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-15-pvp-enforced-server');
}

export default function DuraOnline15PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="dura-online-15-pvp-enforced-server" />;
}
