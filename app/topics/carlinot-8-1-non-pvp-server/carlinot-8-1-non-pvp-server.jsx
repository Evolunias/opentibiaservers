import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-8-1-non-pvp-server');
}

export default function Carlinot81NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="carlinot-8-1-non-pvp-server" />;
}
