import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-11-pvp-server');
}

export default function Thornia11PvpServerKeywordPage() {
  return <StaticKeywordPage slug="thornia-11-pvp-server" />;
}
