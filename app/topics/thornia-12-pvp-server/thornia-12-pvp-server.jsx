import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-12-pvp-server');
}

export default function Thornia12PvpServerKeywordPage() {
  return <StaticKeywordPage slug="thornia-12-pvp-server" />;
}
