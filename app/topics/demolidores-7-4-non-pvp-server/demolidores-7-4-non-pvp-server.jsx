import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-7-4-non-pvp-server');
}

export default function Demolidores74NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="demolidores-7-4-non-pvp-server" />;
}
