import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-10-98-pvp-server');
}

export default function Kasteria1098PvpServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-10-98-pvp-server" />;
}
