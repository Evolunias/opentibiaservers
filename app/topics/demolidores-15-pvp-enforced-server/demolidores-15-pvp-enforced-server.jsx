import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-15-pvp-enforced-server');
}

export default function Demolidores15PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="demolidores-15-pvp-enforced-server" />;
}
