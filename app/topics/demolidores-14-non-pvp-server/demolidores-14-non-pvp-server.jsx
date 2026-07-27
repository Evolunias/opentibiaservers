import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-14-non-pvp-server');
}

export default function Demolidores14NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="demolidores-14-non-pvp-server" />;
}
