import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-8-0-pvp-server');
}

export default function Carlinot80PvpServerKeywordPage() {
  return <StaticKeywordPage slug="carlinot-8-0-pvp-server" />;
}
