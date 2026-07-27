import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-13-pvp-server');
}

export default function Demolidores13PvpServerKeywordPage() {
  return <StaticKeywordPage slug="demolidores-13-pvp-server" />;
}
