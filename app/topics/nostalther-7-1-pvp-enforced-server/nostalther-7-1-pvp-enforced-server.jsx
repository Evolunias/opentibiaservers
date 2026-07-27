import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-7-1-pvp-enforced-server');
}

export default function Nostalther71PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-7-1-pvp-enforced-server" />;
}
