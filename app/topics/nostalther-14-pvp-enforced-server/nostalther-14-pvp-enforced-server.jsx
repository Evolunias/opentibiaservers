import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-14-pvp-enforced-server');
}

export default function Nostalther14PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-14-pvp-enforced-server" />;
}
