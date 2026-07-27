import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-13-pvp-enforced-server');
}

export default function Demolidores13PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="demolidores-13-pvp-enforced-server" />;
}
