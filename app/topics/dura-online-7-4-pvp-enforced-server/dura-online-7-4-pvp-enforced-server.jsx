import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-7-4-pvp-enforced-server');
}

export default function DuraOnline74PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="dura-online-7-4-pvp-enforced-server" />;
}
