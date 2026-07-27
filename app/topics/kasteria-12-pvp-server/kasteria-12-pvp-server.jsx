import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-12-pvp-server');
}

export default function Kasteria12PvpServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-12-pvp-server" />;
}
