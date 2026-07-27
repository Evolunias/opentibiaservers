import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-12-pvp-enforced-server');
}

export default function Demolidores12PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="demolidores-12-pvp-enforced-server" />;
}
