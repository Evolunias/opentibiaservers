import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-7-1-non-pvp-server');
}

export default function Carlinot71NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="carlinot-7-1-non-pvp-server" />;
}
