import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-7-4-pvp-server');
}

export default function Thornia74PvpServerKeywordPage() {
  return <StaticKeywordPage slug="thornia-7-4-pvp-server" />;
}
