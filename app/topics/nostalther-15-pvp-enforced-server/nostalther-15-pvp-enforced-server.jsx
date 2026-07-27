import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-15-pvp-enforced-server');
}

export default function Nostalther15PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-15-pvp-enforced-server" />;
}
