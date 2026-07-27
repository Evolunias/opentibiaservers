import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-14-pvp-server');
}

export default function Kasteria14PvpServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-14-pvp-server" />;
}
