import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-8-54-pvp-server');
}

export default function Kasteria854PvpServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-8-54-pvp-server" />;
}
