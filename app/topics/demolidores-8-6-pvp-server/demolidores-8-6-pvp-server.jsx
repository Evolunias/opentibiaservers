import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-8-6-pvp-server');
}

export default function Demolidores86PvpServerKeywordPage() {
  return <StaticKeywordPage slug="demolidores-8-6-pvp-server" />;
}
