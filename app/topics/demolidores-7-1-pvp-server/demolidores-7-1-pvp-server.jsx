import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-7-1-pvp-server');
}

export default function Demolidores71PvpServerKeywordPage() {
  return <StaticKeywordPage slug="demolidores-7-1-pvp-server" />;
}
