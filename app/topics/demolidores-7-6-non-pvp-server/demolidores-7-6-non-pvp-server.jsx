import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-7-6-non-pvp-server');
}

export default function Demolidores76NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="demolidores-7-6-non-pvp-server" />;
}
