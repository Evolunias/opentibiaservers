import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-7-1-non-pvp-server');
}

export default function Marolaot71NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="marolaot-7-1-non-pvp-server" />;
}
