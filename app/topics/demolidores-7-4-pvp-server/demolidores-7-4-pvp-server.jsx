import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-7-4-pvp-server');
}

export default function Demolidores74PvpServerKeywordPage() {
  return <StaticKeywordPage slug="demolidores-7-4-pvp-server" />;
}
