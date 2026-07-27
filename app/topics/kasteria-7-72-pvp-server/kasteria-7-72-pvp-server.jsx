import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-7-72-pvp-server');
}

export default function Kasteria772PvpServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-7-72-pvp-server" />;
}
