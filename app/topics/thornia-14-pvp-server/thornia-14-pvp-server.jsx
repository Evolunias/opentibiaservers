import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-14-pvp-server');
}

export default function Thornia14PvpServerKeywordPage() {
  return <StaticKeywordPage slug="thornia-14-pvp-server" />;
}
