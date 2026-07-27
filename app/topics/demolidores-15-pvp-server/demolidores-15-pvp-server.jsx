import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-15-pvp-server');
}

export default function Demolidores15PvpServerKeywordPage() {
  return <StaticKeywordPage slug="demolidores-15-pvp-server" />;
}
