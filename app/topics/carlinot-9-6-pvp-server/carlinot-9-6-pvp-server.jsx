import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-9-6-pvp-server');
}

export default function Carlinot96PvpServerKeywordPage() {
  return <StaticKeywordPage slug="carlinot-9-6-pvp-server" />;
}
