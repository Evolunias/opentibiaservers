import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-15-pvp-server');
}

export default function Kasteria15PvpServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-15-pvp-server" />;
}
