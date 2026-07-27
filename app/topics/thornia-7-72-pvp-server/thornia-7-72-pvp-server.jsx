import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-7-72-pvp-server');
}

export default function Thornia772PvpServerKeywordPage() {
  return <StaticKeywordPage slug="thornia-7-72-pvp-server" />;
}
