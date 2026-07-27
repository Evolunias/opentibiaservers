import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-10-0-non-pvp-server');
}

export default function Demolidores100NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="demolidores-10-0-non-pvp-server" />;
}
