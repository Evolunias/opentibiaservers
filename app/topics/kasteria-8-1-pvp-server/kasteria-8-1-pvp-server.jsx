import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-8-1-pvp-server');
}

export default function Kasteria81PvpServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-8-1-pvp-server" />;
}
