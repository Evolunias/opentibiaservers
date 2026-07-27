import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-7-1-pvp-server');
}

export default function Thornia71PvpServerKeywordPage() {
  return <StaticKeywordPage slug="thornia-7-1-pvp-server" />;
}
