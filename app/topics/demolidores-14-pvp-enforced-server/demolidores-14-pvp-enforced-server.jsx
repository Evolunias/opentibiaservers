import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-14-pvp-enforced-server');
}

export default function Demolidores14PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="demolidores-14-pvp-enforced-server" />;
}
