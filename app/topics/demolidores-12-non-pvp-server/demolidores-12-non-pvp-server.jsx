import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-12-non-pvp-server');
}

export default function Demolidores12NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="demolidores-12-non-pvp-server" />;
}
