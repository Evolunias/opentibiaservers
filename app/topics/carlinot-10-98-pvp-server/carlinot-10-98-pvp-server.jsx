import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-10-98-pvp-server');
}

export default function Carlinot1098PvpServerKeywordPage() {
  return <StaticKeywordPage slug="carlinot-10-98-pvp-server" />;
}
