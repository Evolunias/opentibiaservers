import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-11-pvp-enforced-server');
}

export default function Nostalther11PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-11-pvp-enforced-server" />;
}
