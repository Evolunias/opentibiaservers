import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-8-54-pvp-server');
}

export default function Thornia854PvpServerKeywordPage() {
  return <StaticKeywordPage slug="thornia-8-54-pvp-server" />;
}
