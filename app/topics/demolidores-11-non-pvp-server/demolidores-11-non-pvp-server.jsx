import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-11-non-pvp-server');
}

export default function Demolidores11NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="demolidores-11-non-pvp-server" />;
}
