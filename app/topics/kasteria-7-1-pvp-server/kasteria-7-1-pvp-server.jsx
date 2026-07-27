import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-7-1-pvp-server');
}

export default function Kasteria71PvpServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-7-1-pvp-server" />;
}
