import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-8-6-pvp-server');
}

export default function Thornia86PvpServerKeywordPage() {
  return <StaticKeywordPage slug="thornia-8-6-pvp-server" />;
}
