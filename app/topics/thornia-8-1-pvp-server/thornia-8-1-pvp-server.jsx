import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-8-1-pvp-server');
}

export default function Thornia81PvpServerKeywordPage() {
  return <StaticKeywordPage slug="thornia-8-1-pvp-server" />;
}
