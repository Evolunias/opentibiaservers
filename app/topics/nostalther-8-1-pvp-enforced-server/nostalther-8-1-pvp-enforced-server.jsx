import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-8-1-pvp-enforced-server');
}

export default function Nostalther81PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-8-1-pvp-enforced-server" />;
}
