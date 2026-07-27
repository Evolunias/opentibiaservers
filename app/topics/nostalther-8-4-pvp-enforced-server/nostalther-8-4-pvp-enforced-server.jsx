import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-8-4-pvp-enforced-server');
}

export default function Nostalther84PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-8-4-pvp-enforced-server" />;
}
