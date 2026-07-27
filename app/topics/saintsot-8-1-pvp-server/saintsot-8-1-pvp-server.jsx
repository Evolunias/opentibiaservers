import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-8-1-pvp-server');
}

export default function Saintsot81PvpServerKeywordPage() {
  return <StaticKeywordPage slug="saintsot-8-1-pvp-server" />;
}
