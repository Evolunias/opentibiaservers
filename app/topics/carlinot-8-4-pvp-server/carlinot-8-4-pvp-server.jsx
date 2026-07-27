import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-8-4-pvp-server');
}

export default function Carlinot84PvpServerKeywordPage() {
  return <StaticKeywordPage slug="carlinot-8-4-pvp-server" />;
}
