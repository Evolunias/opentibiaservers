import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-14-pvp-server');
}

export default function Demolidores14PvpServerKeywordPage() {
  return <StaticKeywordPage slug="demolidores-14-pvp-server" />;
}
