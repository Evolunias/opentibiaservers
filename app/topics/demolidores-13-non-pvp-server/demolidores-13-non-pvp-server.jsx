import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-13-non-pvp-server');
}

export default function Demolidores13NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="demolidores-13-non-pvp-server" />;
}
