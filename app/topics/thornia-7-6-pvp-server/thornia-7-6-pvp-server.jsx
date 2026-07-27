import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-7-6-pvp-server');
}

export default function Thornia76PvpServerKeywordPage() {
  return <StaticKeywordPage slug="thornia-7-6-pvp-server" />;
}
