import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-8-0-non-pvp-server');
}

export default function Demolidores80NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="demolidores-8-0-non-pvp-server" />;
}
